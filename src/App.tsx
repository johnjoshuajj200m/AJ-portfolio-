import Navigation from '@components/Navigation'
import { Web3HeroAnimated } from '@/components/ui/animated-web3-landing-page'
import ProjectsSection from '@sections/ProjectsSection'
import SkillsSection from '@sections/SkillsSection'
import AboutSection from '@sections/AboutSection'
import ContactSection from '@sections/ContactSection'
import Footer from '@sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-x-hidden">
      <Navigation />
      <Web3HeroAnimated />
      <main className="pt-0">
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
