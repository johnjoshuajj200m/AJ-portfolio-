import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import { profile, socialLinks } from '@data/portfolio'
import emailjs from '@emailjs/browser'

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    const form = e.currentTarget

    try {
      // Replace with your EmailJS credentials from dashboard.emailjs.com
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
      const SERVICE_ID = 'YOUR_SERVICE_ID'
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)

      setFormStatus('success')
      form.reset()
      setTimeout(() => setFormStatus('idle'), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setFormStatus('error')
      setErrorMessage('Failed to send message. Please try again or email me directly.')
      setTimeout(() => {
        setFormStatus('idle')
        setErrorMessage('')
      }, 5000)
    }
  }

  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: <Github size={24} />,
      linkedin: <Linkedin size={24} />,
      twitter: <Twitter size={24} />,
      mail: <Mail size={24} />,
    }
    return icons[iconName] || null
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-slate-900/50 to-gray-900/50 border-t border-white/5">
      <Container size="md">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-slate-400 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="from_name"
                  type="text"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors text-white placeholder:text-slate-500 text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-slate-400 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors text-white placeholder:text-slate-500 text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors text-white placeholder:text-slate-500 text-sm"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-colors text-white placeholder:text-slate-500 resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${formStatus === 'success'
                  ? 'bg-green-600 text-white'
                  : formStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                  } disabled:opacity-50`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'loading' ? 'Sending...' : formStatus === 'success' ? 'Message Sent! ✓' : formStatus === 'error' ? 'Failed to Send ✗' : 'Send Message'}
              </motion.button>

              {errorMessage && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
              <p className="text-slate-400 mb-4">
                Feel free to reach out directly via email. I usually respond within 24 hours.
              </p>
              <motion.a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 text-lg font-semibold text-slate-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={28} />
                {profile.email}
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Connect</h3>
              <p className="text-slate-400 mb-6">
                Follow me on social media for updates and insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/8 transition-colors"
                    whileHover={{ y: -4 }}
                  >
                    <span className="text-slate-300">{getIconComponent(link.icon)}</span>
                    <span className="text-slate-400">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-slate-400 mb-2">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="font-semibold text-white">Currently Available</span>
              </p>
              <p className="text-sm text-slate-400">
                Open to interesting projects and collaboration opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default ContactSection
