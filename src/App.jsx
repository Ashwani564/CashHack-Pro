import React from 'react'
import { motion } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import './styles.css'

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  return (
    <div className="app-container">
      {!isLoading && (
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      )}
      <Profile />
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  )
}
