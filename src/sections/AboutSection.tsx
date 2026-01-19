import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import Card from '@components/Card'
import { aboutText, profile } from '@data/portfolio'

const AboutSection: React.FC = () => {
  const paragraphs = aboutText.split('\n\n')

  return (
    <Section id="about" className="bg-gradient-to-b from-slate-900/50 to-gray-900/50 border-t border-white/5">
      <Container size="md">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg">
            Get to know me better
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Main Text */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-slate-400 leading-relaxed text-sm md:text-base lg:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                Quick Facts
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Location</p>
                  <p className="text-white text-sm md:text-base">{profile.location}</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Experience</p>
                  <p className="text-white text-sm md:text-base">5+ Years</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Email</p>
                  <p className="text-white break-all text-xs md:text-sm">{profile.email}</p>
                </div>
                <hr className="border-slate-700/30" />
                <div>
                  <p className="text-slate-400 text-sm mb-1">Availability</p>
                  <p className="text-slate-100">Available for projects</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: '15+',
              label: 'Projects Completed',
              description: 'From startups to enterprise-scale applications',
            },
            {
              number: '50+',
              label: 'Happy Clients',
              description: 'Building long-term relationships and trust',
            },
            {
              number: '98%',
              label: 'Avg Performance',
              description: 'Lighthouse score across all projects',
            },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-accent-light mb-2">
                {stat.number}
              </p>
              <p className="font-semibold text-slate-100 mb-2">{stat.label}</p>
              <p className="text-sm text-slate-400">{stat.description}</p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export default AboutSection
