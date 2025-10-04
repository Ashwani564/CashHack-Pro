import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import './styles.css'

export default function App() {
  return (
    <div className="app-container">
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  )
}
