import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/Container'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="bg-slate-900 border-t border-white/5 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © {currentYear} Alex Johnson. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p className="text-slate-400 text-sm">
            Built with <span className="text-slate-300">React + Vite</span>
          </p>
        </div>
      </Container>
    </motion.footer>
  )
}

export default Footer
