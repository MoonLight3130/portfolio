import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoGrid from './components/InfoGrid'
import ProjectsSection from './components/ProjectsSection'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import ProjectsPage from './components/ProjectsPage'
import ExperiencePage from './components/ExperiencePage'
import CertificationsPage from './components/CertificationsPage'
import ContactPage from './components/ContactPage'
import FloatingElements from './components/FloatingElements'
import AtmosphereEffects from './components/AtmosphereEffects'
import GlowingRing from './components/GlowingRing'

function App() {
  const [page, setPage] = useState('home')

  const pageMap = {
    'About': 'about',
    'Skills': 'skills',
    'Projects': 'projects',
    'Experience': 'experience',
    'Certifications': 'certifications',
    'Contact': 'contact',
  }

  const handleNavClick = (link) => {
    const targetPage = pageMap[link]
    if (targetPage) {
      setPage(targetPage)
      window.scrollTo(0, 0)
    } else {
      setPage('home')
      setTimeout(() => {
        const el = document.getElementById(link.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    }
  }

  const handleBack = () => {
    setPage('home')
    window.scrollTo(0, 0)
  }

  const bgEffects = (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#030612_0%,#060d1f_45%,#070a18_100%)]" />
      <div className="absolute -left-40 top-6 h-[480px] w-[480px] rounded-full bg-[#00D9FF]/18 blur-[150px]" />
      <div className="absolute right-[-140px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/32 blur-[165px]" />
      <div className="absolute bottom-[-240px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#4c3db1]/34 blur-[190px]" />
      <div className="absolute left-[6%] top-[34%] h-[260px] w-[260px] rounded-full bg-[#00d9ff]/14 blur-[110px]" />
      <div className="absolute right-[10%] top-[52%] h-[270px] w-[270px] rounded-full bg-[#8b5cf6]/18 blur-[115px]" />
      <div className="cyber-grid absolute inset-0 opacity-40" />
      <div className="star-field absolute inset-0 opacity-65" />
      <AtmosphereEffects />
      <FloatingElements />
    </>
  )

  const homeBgEffects = (
    <>
      {bgEffects}
      <div className="geo-glow geo-glow-a" />
      <div className="geo-glow geo-glow-b" />
      <div className="ambient-particle ambient-particle-a" />
      <div className="ambient-particle ambient-particle-b" />
      <div className="ambient-particle ambient-particle-c" />
      <div className="ambient-particle ambient-particle-d" />
      <GlowingRing className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
    </>
  )

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915]">
      {page === 'home' && (
        <>
          <div className="pointer-events-none absolute inset-0">{homeBgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <main
              id="home"
              className="mx-auto w-full max-w-[1580px] px-6 pb-32 pt-6 sm:px-12 lg:px-16"
            >
              <Hero onNavClick={handleNavClick} />
              <InfoGrid onNavClick={handleNavClick} />
              <ProjectsSection />
            </main>
          </div>
        </>
      )}

      {page === 'about' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <AboutPage onBack={handleBack} />
          </div>
        </>
      )}

      {page === 'skills' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <SkillsPage onBack={handleBack} />
          </div>
        </>
      )}

      {page === 'projects' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <ProjectsPage onBack={handleBack} />
          </div>
        </>
      )}

      {page === 'experience' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <ExperiencePage onBack={handleBack} />
          </div>
        </>
      )}

      {page === 'certifications' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <CertificationsPage onBack={handleBack} />
          </div>
        </>
      )}

      {page === 'contact' && (
        <>
          <div className="pointer-events-none absolute inset-0">{bgEffects}</div>
          <div className="relative z-10">
            <Navbar onNavClick={handleNavClick} activePage={page} />
            <ContactPage onBack={handleBack} />
          </div>
        </>
      )}
    </div>
  )
}

export default App
