import type { Project, Skill, SocialLink } from '@types'

/**
 * Portfolio data - centralized source of truth for content
 * Update these objects to customize your portfolio
 */

export const profile = {
  name: 'Alex Johnson',
  role: 'Senior Frontend Engineer',
  bio: 'Building beautiful, performant web experiences with modern technologies. 5+ years of experience in React, TypeScript, and web performance optimization.',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory management',
    longDescription: 'A scalable e-commerce platform built with React and TypeScript, featuring real-time inventory updates, payment processing, and admin dashboard. Achieved 98 Lighthouse score.',
    image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
  },
  {
    id: 2,
    title: 'Design System Component Library',
    description: 'Reusable component library with Storybook documentation',
    longDescription: 'Comprehensive design system with 50+ components, extensive Storybook documentation, and accessibility guidelines. Used across 10+ internal projects reducing development time by 40%.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Jest'],
    links: {
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization with interactive charts',
    longDescription: 'Interactive analytics dashboard processing 1M+ data points, with real-time updates via WebSocket. Implemented custom visualization components and optimized rendering performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket', 'Redux'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
  },
  {
    id: 4,
    title: 'Mobile App - React Native',
    description: 'Cross-platform fitness tracking application',
    longDescription: 'Native iOS and Android app built with React Native and TypeScript. Features real-time location tracking, social features, and offline-first sync capability.',
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    links: {
      github: 'https://github.com',
    },
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & Platform',
    items: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'CI/CD Pipelines'],
  },
  {
    category: 'Design & UX',
    items: ['Figma', 'UI/UX Principles', 'Accessibility', 'Responsive Design', 'Performance Optimization'],
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    label: 'Email',
    url: 'mailto:alex@example.com',
    icon: 'mail',
  },
]

export const aboutText = `I'm a passionate frontend engineer with 5+ years of experience building scalable web applications. I specialize in React and TypeScript, with a strong focus on performance, accessibility, and user experience.

My journey in tech started with a curiosity about how things work on the web. Over the years, I've evolved from a junior developer into a senior engineer who mentors teams and drives architectural decisions.

When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring new web technologies.`
