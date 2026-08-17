import type { Project, Skill, SocialLink } from '@types'

export const profile = {
  name: 'John Joshua Mbaya',
  role: 'Frontend Developer | Digital Operations | AI-Assisted Workflows',
  bio: 'Information Technology student building practical web interfaces and digital tools, with hands-on experience in customer communication, business operations, research, and AI-assisted workflows.',
  email: 'Johnjoshuambaya@gmail.com',
  location: 'Nigeria • currently based in Togo',
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Yohriae NGO Website',
    description: 'Live NGO website with admin content management and online donations',
    longDescription: 'A live website I worked on for a Nigeria-based NGO. I used Lovable to assist with the initial UI, then continued the design and implementation work myself. The platform includes an admin area for adding and deleting posts, plus a Stripe-powered donation flow for supporters.',
    image: '',
    technologies: ['Lovable-assisted UI', 'Admin Dashboard', 'Content Management', 'Stripe', 'Vercel'],
    links: {
      live: 'https://yohriae-website.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Rymdix Technologies',
    description: 'Web platform with public pages, admin workflows, blog, leads, and Supabase integration',
    longDescription: 'A React and TypeScript web platform for a software and automation brand. The project includes a responsive public website, service pages, blog functionality, contact flows, and an admin dashboard structure for managing content, leads, services, and analytics.',
    image: '',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Vercel'],
    links: {
      github: 'https://github.com/johnjoshuajj200m/rymdix-launchpad1',
      live: 'https://rymdix-launchpad1.vercel.app',
    },
  },
  {
    id: 3,
    title: 'FlowPilot SaaS Landing Page',
    description: 'Responsive SaaS interface focused on accessibility, interaction, and clean frontend fundamentals',
    longDescription: 'A responsive SaaS landing page built with semantic HTML, CSS, and vanilla JavaScript. It includes mobile navigation, pricing interactions, form validation, smooth scrolling, accessibility-focused markup, and SEO metadata.',
    image: '',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'SEO'],
    links: {
      github: 'https://github.com/johnjoshuajj200m/flowpilot-saas-landing',
      live: 'https://johnjoshuajj200m.github.io/flowpilot-saas-landing/',
    },
  },
  {
    id: 4,
    title: 'Fintech Landing Page',
    description: 'Responsive fintech-style interface with interactive customer-facing sections',
    longDescription: 'A frontend project built with HTML, CSS, and JavaScript, focused on responsive layout, navigation, FAQ interactions, product messaging, and conversion-oriented sections.',
    image: '',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    links: {
      github: 'https://github.com/johnjoshuajj200m/fintech-landing-page',
      live: 'https://johnjoshuajj200m.github.io/fintech-landing-page/',
    },
  },
]

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Digital & AI Workflows',
    items: ['AI-assisted research', 'Prompt development', 'Information organization', 'Web troubleshooting', 'Content workflows', 'Google Docs & Drive'],
  },
  {
    category: 'Customer & Business Operations',
    items: ['Customer communication', 'Email & WhatsApp support', 'Follow-ups', 'Online research', 'Documentation support', 'Invoice & payment follow-up'],
  },
  {
    category: 'Currently Developing',
    items: ['Linux', 'Cloud computing', 'AWS concepts', 'Azure concepts', 'DevOps', 'Networking', 'Cloud security'],
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/johnjoshuajj200m',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/john-joshua-829686377/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    url: 'https://x.com/JohnJoshuaMbaya',
    icon: 'twitter',
  },
  {
    label: 'Email',
    url: 'mailto:Johnjoshuambaya@gmail.com',
    icon: 'mail',
  },
]

export const aboutText = `I’m an Information Technology student with hands-on experience in frontend web development, digital operations, international customer communication, research, and AI-assisted workflows.

I build practical web interfaces and digital tools, and I’m especially interested in work where technology solves a real business or operational problem. I’ve also supported international customers, suppliers, clients, and business partners through digital channels, handling follow-ups, documentation requests, payment discussions, business updates, and customer concerns.

I’m continuing to strengthen my technical skills through project-based learning while looking for remote internships and junior opportunities where I can contribute to real products, customer-facing systems, internal tools, and automation workflows.`
