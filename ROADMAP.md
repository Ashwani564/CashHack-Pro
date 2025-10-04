CashHack-Pro - Brief roadmap and API plan (hackathon-ready)

Phase 0 — Dev setup (done):
- Vite + React scaffold
- Minimal Express backend with /api/health, /api/uploadStatement, /api/cashbackTips

Phase 1 — Authentication & User Management
- Auth provider: Auth0 (free tier)
  - Use @auth0/auth0-react on frontend, configure universal login and callbacks
  - Save extra user metadata (linked accounts) in Supabase
- Database: Supabase (Postgres managed) - free tier adequate for hackathon

Phase 2 — Data ingestion
Option A (quick): PDF uploads
- Frontend: file input -> POST /api/uploadStatement (multipart)
- Backend: use pdf-parse (Node) or pdfplumber (Python) to extract text
- Parse transactions with regex and store rows in Supabase

Option B (live): Open banking aggregation
- Free/cheap options are limited. Use Plaid (not free beyond dev) or Yodlee (complex).
- Simpler approach: use bank-specific OAuth where available or use the user's CSV export
- For hackathon, prefer PDF/CSV uploads to guarantee reliability and zero-lag

Phase 3 — Storage & schema
- Tables: users, statements, transactions, cards, cashback_rules
- Use Supabase client (@supabase/supabase-js) for serverless queries

Phase 4 — Processing & UI
- Categorization: keyword rules + manual override; store mappings per user
- Net worth: sum(bank_balances) - sum(credit_card_balances)
- Visuals: Chart.js + react-chartjs-2; endpoints: /api/summary

Phase 5 — Cashback tips
- Maintain static JSON for rotating categories and card rules
- Endpoint /api/cashbackTips returns suggestions based on user's cards

Phase 6 — AI assistant (chat + voice)
- LLM: Google Gemini via Vertex AI (Gemini Text API). Note: Vertex may need billing; check free quota.
  - Alternative free LLMs: OpenAI trial, or local LLMs (small) for hackathon demo.
- TTS: ElevenLabs (free tier limited) — use for voice responses
- Chat flow: frontend -> backend -> Gemini -> backend returns text + ElevenLabs audio URL

Phase 7 — Deployment
- Frontend: Vercel or Netlify (both support React + Vite) — free tiers
- Backend: Render/Heroku/ Fly/Render (free tiers) or host serverless on Supabase Edge Functions

Quick API list (free/low-cost options):
- Auth: Auth0 (free tier)
- DB: Supabase Postgres (free tier)
- File parsing: pdf-parse (Node) or pdfplumber (Python)
- Charts: Chart.js
- LLM: Gemini via Vertex AI (may require billing) — alternative OpenAI (trial) or free small models
- TTS: ElevenLabs (free tier, limited) — alternative: Google Cloud TTS (free credits) or Web Speech API for client-side TTS

Short implementation checklist (copy into Copilot):
- Setup Auth0 tenant and client; add callback URLs
- Create Supabase project and tables
- Implement /api/uploadStatement to accept PDFs and parse transactions
- Implement /api/summary to aggregate by category and month
- Build dashboard UI with Chart.js
- Add /api/cashbackTips and static JSON rules
- Integrate LLM in backend and ElevenLabs for audio

Notes & assumptions:
- For hackathon reliability, prefer PDF/CSV ingestion over live bank connections.
- Some cloud AI services require billing; budget for small usage if needed.
- We'll prioritize offline ingestion, then add live integrations later.
