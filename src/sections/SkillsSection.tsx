import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/Container'
import Section from '@components/Section'
import Card from '@components/Card'
import { skills } from '@data/portfolio'
import type { Skill } from '@types'

const SkillCategory: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <h3 className="text-lg md:text-xl font-bold text-white mb-6">{skill.category}</h3>
        <div className="grid grid-cols-2 gap-3">
          {skill.items.map((item) => (
            <motion.div
              key={item}
              className="px-3 md:px-4 py-2 md:py-3 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/8 transition-colors text-xs md:text-sm text-slate-400"
              whileHover={{ scale: 1.03 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Skills & Tools</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Technologies I use today, plus the areas I am actively developing through project-based learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCategory key={skill.category} skill={skill} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 bg-accent/5 border border-accent/30 rounded-xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-300 text-base md:text-lg">
            I learn by building, testing, troubleshooting, and improving real projects. I am especially focused on frontend development, practical digital operations, AI-assisted workflows, and growing my cloud/DevOps foundation.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export default SkillsSection
