import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function BackgroundEffects({ isHome = false }) {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Floating particles with GSAP
      const particles = containerRef.current.querySelectorAll('.gsap-particle')
      particles.forEach((particle, i) => {
        const duration = 8 + Math.random() * 6
        const delay = Math.random() * 2
        
        gsap.to(particle, {
          y: -100 - Math.random() * 150,
          x: (Math.random() - 0.5) * 80,
          opacity: 0.3 + Math.random() * 0.4,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        gsap.to(particle, {
          scale: 0.8 + Math.random() * 0.4,
          duration: duration * 0.8,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Animated glowing orbs
      const orbs = containerRef.current.querySelectorAll('.gsap-orb')
      orbs.forEach((orb, i) => {
        const duration = 10 + Math.random() * 8
        const delay = Math.random() * 3

        gsap.to(orb, {
          x: (Math.random() - 0.5) * 60,
          y: (Math.random() - 0.5) * 60,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        gsap.to(orb, {
          scale: 1 + Math.random() * 0.3,
          opacity: 0.6 + Math.random() * 0.3,
          duration: duration * 0.7,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Floating geometric shapes
      const shapes = containerRef.current.querySelectorAll('.gsap-shape')
      shapes.forEach((shape, i) => {
        const duration = 12 + Math.random() * 10
        const delay = Math.random() * 4

        gsap.to(shape, {
          y: -50 - Math.random() * 80,
          rotation: 15 + Math.random() * 30,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        gsap.to(shape, {
          rotation: -15 - Math.random() * 30,
          duration: duration * 0.9,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Glow pulse effects
      const glows = containerRef.current.querySelectorAll('.gsap-glow')
      glows.forEach((glow, i) => {
        const duration = 4 + Math.random() * 4
        const delay = Math.random() * 2

        gsap.to(glow, {
          opacity: 0.3 + Math.random() * 0.5,
          scale: 1 + Math.random() * 0.2,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Parallax movement on scroll
      if (isHome) {
        const parallaxElements = containerRef.current.querySelectorAll('.parallax-layer')
        parallaxElements.forEach((el) => {
          const speed = parseFloat(el.dataset.speed) || 0.5

          gsap.to(el, {
            yPercent: -20 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        })
      }

      // Ambient gradient animation
      const gradientLayers = containerRef.current.querySelectorAll('.ambient-gradient')
      gradientLayers.forEach((layer, i) => {
        const duration = 15 + Math.random() * 10
        const delay = Math.random() * 5

        gsap.to(layer, {
          opacity: 0.4 + Math.random() * 0.4,
          scale: 1.1 + Math.random() * 0.2,
          duration,
          delay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Cinematic motion depth - subtle zoom effect
      const depthLayers = containerRef.current.querySelectorAll('.depth-layer')
      depthLayers.forEach((layer, i) => {
        const depth = parseFloat(layer.dataset.depth) || 1
        const duration = 20 + Math.random() * 15

        gsap.to(layer, {
          scale: 1 + (depth * 0.1),
          opacity: 0.5 + (depth * 0.2),
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Floating dust particles for added atmosphere
      const dustParticles = containerRef.current.querySelectorAll('.dust-particle')
      dustParticles.forEach((particle, i) => {
        const x = parseFloat(particle.dataset.x) || Math.random() * 100
        const y = parseFloat(particle.dataset.y) || Math.random() * 100
        const duration = 15 + Math.random() * 20
        const delay = Math.random() * 10

        gsap.fromTo(
          particle,
          {
            x: `${x}%`,
            y: `${y}%`,
            opacity: 0,
          },
          {
            x: `${x + (Math.random() - 0.5) * 20}%`,
            y: `${y - 20 - Math.random() * 30}%`,
            opacity: 0.6 + Math.random() * 0.3,
            duration,
            delay,
            repeat: -1,
            ease: 'power1.inOut',
          }
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles */}
      <div className="gsap-particle absolute w-1 h-1 rounded-full bg-[#00D9FF]/40 blur-[1px]" style={{ left: '12%', top: '18%' }} />
      <div className="gsap-particle absolute w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/50 blur-[1px]" style={{ left: '78%', top: '24%' }} />
      <div className="gsap-particle absolute w-1 h-1 rounded-full bg-[#00D9FF]/35 blur-[1px]" style={{ left: '45%', top: '52%' }} />
      <div className="gsap-particle absolute w-2 h-2 rounded-full bg-[#8B5CF6]/45 blur-[1.5px]" style={{ left: '88%', top: '68%' }} />
      <div className="gsap-particle absolute w-1 h-1 rounded-full bg-[#00D9FF]/40 blur-[1px]" style={{ left: '22%', top: '75%' }} />
      <div className="gsap-particle absolute w-1.5 h-1.5 rounded-full bg-[#8B5CF6]/50 blur-[1px]" style={{ left: '65%', top: '35%' }} />
      <div className="gsap-particle absolute w-1 h-1 rounded-full bg-[#00D9FF]/35 blur-[1px]" style={{ left: '8%', top: '42%' }} />
      <div className="gsap-particle absolute w-2 h-2 rounded-full bg-[#8B5CF6]/45 blur-[1.5px]" style={{ left: '92%', top: '15%' }} />

      {/* Animated glowing orbs */}
      <div className="gsap-orb absolute w-32 h-32 rounded-full bg-[#00D9FF]/20 blur-[80px]" style={{ left: '5%', top: '10%' }} />
      <div className="gsap-orb absolute w-40 h-40 rounded-full bg-[#8B5CF6]/25 blur-[100px]" style={{ right: '5%', top: '20%' }} />
      <div className="gsap-orb absolute w-28 h-28 rounded-full bg-[#00D9FF]/18 blur-[70px]" style={{ left: '15%', top: '60%' }} />
      <div className="gsap-orb absolute w-36 h-36 rounded-full bg-[#8B5CF6]/22 blur-[90px]" style={{ right: '10%', bottom: '20%' }} />

      {/* Floating geometric shapes */}
      <div className="gsap-shape absolute w-16 h-16 rounded-lg border border-[#00D9FF]/20 bg-[#00D9FF]/5 backdrop-blur-sm" style={{ left: '20%', top: '25%' }} />
      <div className="gsap-shape absolute w-12 h-12 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/8 backdrop-blur-sm" style={{ right: '25%', top: '45%' }} />
      <div className="gsap-shape absolute w-20 h-20 rounded-lg border border-[#00D9FF]/15 bg-[#00D9FF]/4 backdrop-blur-sm" style={{ left: '70%', top: '70%' }} />
      <div className="gsap-shape absolute w-14 h-14 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/6 backdrop-blur-sm" style={{ left: '8%', top: '65%' }} />

      {/* Glow pulse effects */}
      <div className="gsap-glow absolute w-24 h-24 rounded-full bg-[#00D9FF]/10 blur-[50px]" style={{ left: '30%', top: '40%' }} />
      <div className="gsap-glow absolute w-32 h-32 rounded-full bg-[#8B5CF6]/12 blur-[60px]" style={{ right: '20%', top: '60%' }} />
      <div className="gsap-glow absolute w-20 h-20 rounded-full bg-[#00D9FF]/8 blur-[40px]" style={{ left: '50%', top: '20%' }} />

      {/* Ambient gradients */}
      <div className="ambient-gradient absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 via-transparent to-[#8B5CF6]/5" />
      <div className="ambient-gradient absolute inset-0 bg-gradient-to-tl from-[#8B5CF6]/5 via-transparent to-[#00D9FF]/5" style={{ animationDelay: '2s' }} />

      {/* Parallax layers for home */}
      {isHome && (
        <>
          <div className="parallax-layer absolute w-[600px] h-[600px] rounded-full bg-[#00D9FF]/15 blur-[200px]" data-speed="0.3" style={{ left: '-10%', top: '-5%' }} />
          <div className="parallax-layer absolute w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/20 blur-[220px]" data-speed="0.5" style={{ right: '-15%', top: '-10%' }} />
        </>
      )}

      {/* Depth layers */}
      <div className="depth-layer absolute w-[400px] h-[400px] rounded-full bg-[#00D9FF]/10 blur-[150px]" data-depth="0.5" style={{ left: '10%', top: '30%' }} />
      <div className="depth-layer absolute w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/15 blur-[180px]" data-depth="0.8" style={{ right: '15%', top: '50%' }} />

      {/* Floating dust particles */}
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/30" data-x="10" data-y="90" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/25" data-x="25" data-y="85" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/35" data-x="40" data-y="92" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/28" data-x="55" data-y="88" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/32" data-x="70" data-y="95" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/30" data-x="85" data-y="90" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/25" data-x="15" data-y="75" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/35" data-x="35" data-y="80" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/28" data-x="60" data-y="78" />
      <div className="dust-particle absolute w-0.5 h-0.5 rounded-full bg-white/32" data-x="80" data-y="82" />
    </div>
  )
}

export default BackgroundEffects
