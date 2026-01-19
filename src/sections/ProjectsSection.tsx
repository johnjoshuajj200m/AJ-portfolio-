import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Container from '@components/Container'
import Section from '@components/Section'
import Card from '@components/Card'
import Button from '@components/Button'
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
        {/* Project Image */}
        <div className="relative w-full mb-4 rounded-xl overflow-hidden bg-gray-800" style={{ height: '180px' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            className="hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.style.backgroundColor = '#1f2937'
            }}
          />
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-4 text-xs md:text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 text-accent-light text-xs rounded-full border border-accent/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
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
              <ExternalLink size={16} /> Live
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
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Showcasing modern web technologies, scalable architecture, and user-focused design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ProjectsSection
