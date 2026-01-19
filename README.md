# Modern Portfolio Website

A professional, high-performance portfolio website built with React, TypeScript, Vite, and Tailwind CSS. Features modern UI/UX with smooth animations, responsive design, and a working contact form powered by EmailJS.

## ✨ Features

- **Modern Stack**: React 18 + TypeScript + Vite + Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Working Contact Form**: Real email sending via EmailJS
- **Clean Architecture**: Reusable components with TypeScript typing
- **Fast Performance**: Optimized build with Vite
- **SEO Ready**: Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd react-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build
```

## 📧 Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails. Follow these steps to configure it:

### 1. Create EmailJS Account
- Sign up at [emailjs.com](https://www.emailjs.com/)
- Create an email service (Gmail, Outlook, etc.)
- Create an email template with these variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message

### 2. Configure Credentials
Open `src/sections/ContactSection.tsx` and update these values (around line 26):

```typescript
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // From EmailJS dashboard
const SERVICE_ID = 'YOUR_SERVICE_ID'      // Your email service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Your email template ID
```

### 3. Test the Form
Fill out and submit the contact form - you should receive an email!

## 🎨 Customization

### Update Your Profile
Edit `src/data/portfolio.ts`:

```typescript
export const profile = {
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio...',
  email: 'your@email.com',
  location: 'Your City',
}
```

### Add/Update Projects
Update the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Detailed description',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    links: {
      github: 'https://github.com/username/repo',
      live: 'https://your-project.com',
    },
  },
]
```

### Update Skills
Modify `src/data/portfolio.ts` to update the skills section.

### Customize Colors
Edit `tailwind.config.js` to change the color scheme.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── Navigation.tsx
│   └── ui/             # Advanced UI components
├── sections/            # Page sections
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── types/              # TypeScript definitions
├── data/               # Static data (portfolio.ts)
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **Lucide React** - Icons

## 🚢 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy!

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
})
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ using modern web technologies**
