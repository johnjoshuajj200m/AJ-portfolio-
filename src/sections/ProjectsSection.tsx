import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import Card from '@components/Card'
import { projects } from '@data/portfolio'
import type { Project } from '@types'

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card>
        <div className="mb-4 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-white/5 to-transparent p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Project {String(index + 1).padStart(2, '0')}</p>
          <p className="mt-2 text-sm text-slate-400">Built to demonstrate practical product and frontend work.</p>
        </div>

        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate-400 mb-3 text-xs md:text-sm leading-relaxed">{project.description}</p>
        <p className="text-slate-500 mb-5 text-xs md:text-sm leading-relaxed">{project.longDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-accent/10 text-accent-light text-xs rounded-full border border-accent/30">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.links.github && (
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Github size={16} /> Code
            </motion.a>
          )}
          {project.links.live && (
            <motion.a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={16} /> Live Demo
            </motion.a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" className="bg-gradient-to-b from-slate-900/50 to-gray-900/50 border-t border-white/5">
      <Container>
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Selected Work</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Real projects and practical builds showing how I approach frontend development, digital products, and business-facing workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/johnjoshuajj200m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ProjectsSection
