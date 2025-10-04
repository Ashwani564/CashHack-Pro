import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    icon: '📊',
    title: 'Visualize Everything',
    description: 'See all your accounts in one beautiful dashboard just by drag n drop statements',
    color: '#06b6d4'
  },
  {
    icon: '💳',
    title: 'Max Cashback',
    description: 'Know which card to use for maximum cashback every time',
    color: '#8b5cf6'
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Chat or talk to understand your spending habits and get personalized tips',
    color: '#ec4899'
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="features" ref={ref}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Everything You Need in <span className="gradient-text">One Place</span>
      </motion.h2>

      <motion.div 
        className="features-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 20px 60px ${feature.color}30`
            }}
          >
            <motion.div 
              className="feature-icon"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              {feature.icon}
            </motion.div>
            <h3 style={{ color: feature.color }}>{feature.title}</h3>
            <p>{feature.description}</p>
            
            <motion.div 
              className="feature-glow"
              style={{ backgroundColor: feature.color }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
