import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

/**
 * Card Component
 * Wrapper component for consistent card styling with subtle hover effects
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true,
}) => {
  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-sm md:backdrop-blur-lg border border-white/10
        rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 shadow-md md:shadow-xl
        ${hoverable ? 'hover:border-white/20 hover:bg-white/8 hover:shadow-lg md:hover:shadow-2xl' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hoverable ? { y: -4 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default Card
