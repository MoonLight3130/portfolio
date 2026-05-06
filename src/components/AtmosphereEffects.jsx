import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function AtmosphereEffects() {
  const containerRef = useRef(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Animated star particles
    const stars = containerRef.current.querySelectorAll('.atmo-star')
    stars.forEach((star, i) => {
      gsap.to(star, {
        opacity: 0.2 + Math.random() * 0.8,
        scale: 0.8 + Math.random() * 0.4,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Soft moving radial gradients
    const gradients = containerRef.current.querySelectorAll('.atmo-gradient')
    gradients.forEach((grad, i) => {
      gsap.to(grad, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        scale: 1 + Math.random() * 0.3,
        opacity: 0.3 + Math.random() * 0.3,
        duration: 15 + Math.random() * 10,
        delay: i * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Floating neon blur blobs
    const blobs = containerRef.current.querySelectorAll('.atmo-blob')
    blobs.forEach((blob, i) => {
      gsap.to(blob, {
        x: (Math.random() - 0.5) * 80,
        y: (Math.random() - 0.5) * 80,
        scale: 1.1 + Math.random() * 0.4,
        duration: 12 + Math.random() * 8,
        delay: i * 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Subtle light streak motion
    const streaks = containerRef.current.querySelectorAll('.atmo-streak')
    streaks.forEach((streak, i) => {
      gsap.fromTo(streak, 
        { x: '-100%', opacity: 0 },
        {
          x: '200%',
          opacity: 0.15,
          duration: 8 + Math.random() * 6,
          delay: i * 3,
          repeat: -1,
          ease: 'power2.inOut',
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated star particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="atmo-star absolute w-0.5 h-0.5 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 ${4 + Math.random() * 6}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}

      {/* Soft moving radial gradients */}
      <div
        className="atmo-gradient absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{
          left: '-5%',
          top: '20%',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="atmo-gradient absolute w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          right: '-10%',
          top: '40%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
        }}
      />
      <div
        className="atmo-gradient absolute w-[400px] h-[400px] rounded-full blur-[80px]"
        style={{
          left: '30%',
          bottom: '-5%',
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Floating neon blur blobs */}
      <div
        className="atmo-blob absolute w-32 h-32 rounded-full blur-[60px]"
        style={{
          left: '15%',
          top: '35%',
          background: 'rgba(0, 217, 255, 0.2)',
        }}
      />
      <div
        className="atmo-blob absolute w-40 h-40 rounded-full blur-[80px]"
        style={{
          right: '20%',
          top: '25%',
          background: 'rgba(139, 92, 246, 0.25)',
        }}
      />
      <div
        className="atmo-blob absolute w-24 h-24 rounded-full blur-[50px]"
        style={{
          left: '50%',
          top: '60%',
          background: 'rgba(0, 217, 255, 0.15)',
        }}
      />
      <div
        className="atmo-blob absolute w-36 h-36 rounded-full blur-[70px]"
        style={{
          right: '10%',
          bottom: '15%',
          background: 'rgba(139, 92, 246, 0.2)',
        }}
      />

      {/* Subtle light streaks */}
      <div
        className="atmo-streak absolute h-px w-[200px]"
        style={{
          left: '0%',
          top: '25%',
          background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)',
          transform: 'rotate(-5deg)',
        }}
      />
      <div
        className="atmo-streak absolute h-px w-[150px]"
        style={{
          left: '0%',
          top: '65%',
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
          transform: 'rotate(-8deg)',
        }}
      />
      <div
        className="atmo-streak absolute h-px w-[180px]"
        style={{
          left: '0%',
          top: '45%',
          background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)',
          transform: 'rotate(-3deg)',
        }}
      />
    </div>
  )
}

export default AtmosphereEffects
