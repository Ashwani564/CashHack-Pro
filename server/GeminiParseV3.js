const { GoogleGenerativeAI } = require("@google/generative-ai");
const pdfParse = require("pdf-parse");
const fs = require("fs");

async function extractTextFromPDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

async function testGeminiCategorizedBankParser(pdfPath) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY not set in environment");
    process.exit(1);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const statementText = await extractTextFromPDF(pdfPath);

  const prompt = `
Given the following bank statement, process the transactions into these sections:
- Income (only include transactions with 'DIRECT DEPOSIT' in the description; ignore all other credits such as zelle)
- Rent (description contains 'RENT' or the transaction looks like a rent payment)
- Food (description contains 'GROCERY', 'RESTAURANT', or similar)
- Shopping (description contains 'SHOPPING', 'AMAZON', or similar)
- Gas (description contains 'GAS' or name of gas station)
- Insurance (description contains 'INSURANCE' or an insurance company)
Ignore all transactions (sent or received) containing 'ZELLE' in the description.
For each section, list the transactions in a table with columns: Date, Description, Amount, Balance.
Return a JSON object like:
{
  "Income": [...],
  "Rent": [...],
  "Food": [...],
  "Shopping": [...],
  "Gas": [...],
  "Insurance": [...]
}
Omit any section if there are no transactions. Do not add explanations or extra fields.

Statement:
${statementText}
`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.candidates[0].content.parts[0].text;
    // Try to extract JSON object from the response
    const match = text.match(/```json([\s\S]*?)```/);
    const json = match ? match[1].trim() : text;
    const parsed = JSON.parse(json);
    console.log("Categorized Transactions:", parsed);
  } catch (e) {
    console.error("Failed to parse:", e);
  }
}

const pdfPath = process.argv[2];
if (!pdfPath) {
  console.error("Usage: node testGeminiCategorizedParse.js <path_to_pdf>");
  process.exit(1);
}
testGeminiCategorizedBankParser(pdfPath);