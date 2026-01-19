import React from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  fullHeight?: boolean
}

/**
 * Section Component
 * Wrapper for page sections with consistent spacing and animation
 */
const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  fullHeight = false,
}) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${fullHeight ? 'min-h-screen flex items-center' : ''} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  )
}

export default Section
