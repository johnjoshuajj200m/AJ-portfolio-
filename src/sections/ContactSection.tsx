import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import { profile, socialLinks } from '@data/portfolio'

const ContactSection: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      github: <Github size={22} />,
      linkedin: <Linkedin size={22} />,
      twitter: <Twitter size={22} />,
      mail: <Mail size={22} />,
    }
    return icons[iconName] || null
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-slate-900/50 to-gray-900/50 border-t border-white/5">
      <Container size="md">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Let’s Connect</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            I’m open to remote internships, junior roles, and practical project opportunities where I can contribute and keep growing.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-3">Direct contact</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a role or project that fits my background?</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                The fastest way to reach me is by email. I’m especially interested in frontend development, customer-facing technology, digital operations, AI-assisted workflows, and entry-level cloud/DevOps opportunities.
              </p>
              <a
                href={`mailto:${profile.email}?subject=Opportunity for John Joshua Mbaya`}
                className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                <Mail size={18} /> Email Me
              </a>
              <p className="mt-4 text-sm text-slate-500 break-all">{profile.email}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Professional links</h3>
              <div className="grid gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.icon === 'mail' ? undefined : '_blank'}
                    rel={link.icon === 'mail' ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-3 p-4 bg-black/20 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/8 transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-slate-300">{getIconComponent(link.icon)}</span>
                    <span className="text-slate-300">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ContactSection
