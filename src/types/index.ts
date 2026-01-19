// Type definitions for the portfolio application

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  links: {
    github?: string
    live?: string
  }
}

export interface Skill {
  category: string
  items: string[]
}

export interface SocialLink {
  label: string
  url: string
  icon: string
}
