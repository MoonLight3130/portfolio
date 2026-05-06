import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoGrid from './components/InfoGrid'
import ProjectsSection from './components/ProjectsSection'
import FloatingElements from './components/FloatingElements'
import AtmosphereEffects from './components/AtmosphereEffects'
import GlowingRing from './components/GlowingRing'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#030612_0%,#060d1f_45%,#070a18_100%)]" />
        <div className="absolute -left-40 top-6 h-[480px] w-[480px] rounded-full bg-[#00D9FF]/18 blur-[150px]" />
        <div className="absolute right-[-140px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#8B5CF6]/32 blur-[165px]" />
        <div className="absolute bottom-[-240px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#4c3db1]/34 blur-[190px]" />
        <div className="absolute left-[6%] top-[34%] h-[260px] w-[260px] rounded-full bg-[#00d9ff]/14 blur-[110px]" />
        <div className="absolute right-[10%] top-[52%] h-[270px] w-[270px] rounded-full bg-[#8b5cf6]/18 blur-[115px]" />
        <div className="geo-glow geo-glow-a" />
        <div className="geo-glow geo-glow-b" />
        <div className="ambient-particle ambient-particle-a" />
        <div className="ambient-particle ambient-particle-b" />
        <div className="ambient-particle ambient-particle-c" />
        <div className="ambient-particle ambient-particle-d" />
        <div className="cyber-grid absolute inset-0 opacity-40" />
        <div className="star-field absolute inset-0 opacity-65" />
        <AtmosphereEffects />
        <FloatingElements />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main
          id="home"
          className="mx-auto w-full max-w-[1580px] px-6 pb-32 pt-6 sm:px-12 lg:px-16"
        >
          <Hero />
          <InfoGrid />
          <ProjectsSection />
          <GlowingRing className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        </main>
      </div>
    </div>
  )
}

export default App
