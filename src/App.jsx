import React from 'react'

export default function App(){
  return (
    <div className="app-root">
      <header className="hero">
        <h1>CashHack Pro</h1>
        <p>Personal finance insights, cashback tips, and AI assistant.</p>
        <div className="controls">
          <button className="primary">Connect Accounts</button>
          <button className="secondary">Upload Statements (PDF)</button>
        </div>
      </header>

      <main className="content">
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Aggregate accounts & visualizations</li>
            <li>Cashback recommendations</li>
            <li>AI chat & voice assistant</li>
          </ul>
        </section>

        <section className="demo">
          <h3>Live demo coming soon</h3>
          <p>Start by connecting your accounts or uploading PDFs.</p>
        </section>
      </main>

      <footer>
        <small>Built for the Hackathon</small>
      </footer>
    </div>
  )
}
