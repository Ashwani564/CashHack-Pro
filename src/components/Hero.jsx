import React from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'

export default function Hero() {
  const [springs, api] = useSpring(() => ({
    from: { y: -50, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { tension: 120, friction: 14 }
  }))

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="hero">
      <div className="hero-bg">
        <motion.div 
          className="gradient-orb orb-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="gradient-orb orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="hero-content">
        <animated.div style={springs}>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master Your
            <span className="gradient-text"> Money</span>
            <br />
            With <span className="gradient-text">AI</span>
          </motion.h1>

          <motion.div 
            className="hero-subtitle-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="hero-tagline">Everything in <span className="highlight">ONE</span></p>
            <p className="hero-features">
              Smart finance tracking <span className="dot">•</span> AI-powered insights <span className="dot">•</span> Maximum cashback
            </p>
            <p className="hero-benefit">No need to get on multiple apps</p>
          </motion.div>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </animated.div>

        <motion.div 
          className="hero-visual"
          animate={floatingAnimation}
        >
          <motion.div 
            className="dashboard-preview"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="preview-card">
              <div className="preview-header">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
              <div className="preview-content">
                <motion.div 
                  className="chart-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.div 
                  className="chart-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 1, delay: 1.4 }}
                />
                <motion.div 
                  className="chart-bar"
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1, delay: 1.6 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
