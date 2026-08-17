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
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg">Technology, operations, and practical problem-solving</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
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

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card>
              <h3 className="text-lg md:text-xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Location</p>
                  <p className="text-white text-sm md:text-base">{profile.location}</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Education</p>
                  <p className="text-white text-sm md:text-base">Information Technology — in progress</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Email</p>
                  <p className="text-white break-all text-xs md:text-sm">{profile.email}</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <p className="text-slate-400 text-xs md:text-sm mb-1">Availability</p>
                  <p className="text-white text-sm md:text-base">Remote internships & junior roles</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: 'Real Organization Work',
              description: 'Worked on a live NGO website with admin content management and Stripe donations.',
            },
            {
              label: 'Business + Customer Context',
              description: 'Hands-on experience with international communication, follow-ups, research, and digital operations.',
            },
            {
              label: 'Project-Based Learning',
              description: 'Continuously strengthening frontend, cloud, DevOps, networking, and AI-assisted workflow skills.',
            },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
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
