import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function FloatingElements() {
  const containerRef = useRef(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Floating cubes
    const cubes = containerRef.current.querySelectorAll('.float-cube')
    cubes.forEach((cube, i) => {
      gsap.to(cube, {
        y: -30 - Math.random() * 40,
        rotation: 15 + Math.random() * 25,
        duration: 6 + Math.random() * 4,
        delay: i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      
      gsap.to(cube, {
        rotationX: 180,
        rotationY: 180,
        duration: 8 + Math.random() * 6,
        delay: i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Floating circles
    const circles = containerRef.current.querySelectorAll('.float-circle')
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        y: -20 - Math.random() * 30,
        x: (Math.random() - 0.5) * 40,
        scale: 1.1 + Math.random() * 0.2,
        duration: 7 + Math.random() * 5,
        delay: i * 0.7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Neon glass shapes
    const glassShapes = containerRef.current.querySelectorAll('.glass-shape')
    glassShapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: -40 - Math.random() * 50,
        rotation: 10 + Math.random() * 20,
        duration: 10 + Math.random() * 8,
        delay: i * 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    // Small particles
    const particles = containerRef.current.querySelectorAll('.float-particle')
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: -60 - Math.random() * 80,
        x: (Math.random() - 0.5) * 60,
        opacity: 0.2 + Math.random() * 0.5,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating cubes */}
      <div
        className="float-cube absolute w-8 h-8 border border-[#00D9FF]/30 bg-[#00D9FF]/10 backdrop-blur-[2px]"
        style={{
          left: '8%',
          top: '20%',
          transform: 'rotateX(45deg) rotateY(45deg)',
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.1)',
        }}
      />
      <div
        className="float-cube absolute w-6 h-6 border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 backdrop-blur-[2px]"
        style={{
          right: '12%',
          top: '15%',
          transform: 'rotateX(30deg) rotateY(60deg)',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)',
        }}
      />
      <div
        className="float-cube absolute w-10 h-10 border border-[#00D9FF]/20 bg-[#00D9FF]/5 backdrop-blur-[2px]"
        style={{
          left: '75%',
          top: '60%',
          transform: 'rotateX(60deg) rotateY(30deg)',
          boxShadow: '0 0 25px rgba(0, 217, 255, 0.15), inset 0 0 25px rgba(0, 217, 255, 0.08)',
        }}
      />

      {/* Floating circles */}
      <div
        className="float-circle absolute w-12 h-12 rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 backdrop-blur-[2px]"
        style={{
          left: '18%',
          top: '70%',
          boxShadow: '0 0 25px rgba(139, 92, 246, 0.2), inset 0 0 15px rgba(139, 92, 246, 0.1)',
        }}
      />
      <div
        className="float-circle absolute w-8 h-8 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/8 backdrop-blur-[2px]"
        style={{
          right: '20%',
          top: '45%',
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.2), inset 0 0 12px rgba(0, 217, 255, 0.08)',
        }}
      />
      <div
        className="float-circle absolute w-16 h-16 rounded-full border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 backdrop-blur-[2px]"
        style={{
          left: '45%',
          top: '10%',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.15), inset 0 0 20px rgba(139, 92, 246, 0.05)',
        }}
      />

      {/* Neon glass shapes */}
      <div
        className="glass-shape absolute w-20 h-20 rounded-lg border border-[#00D9FF]/20 bg-[#00D9FF]/5 backdrop-blur-[4px]"
        style={{
          left: '5%',
          top: '50%',
          transform: 'rotate(15deg)',
          boxShadow: '0 0 30px rgba(0, 217, 255, 0.15), 0 8px 32px rgba(0, 217, 255, 0.1)',
        }}
      />
      <div
        className="glass-shape absolute w-24 h-24 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 backdrop-blur-[4px]"
        style={{
          right: '8%',
          top: '75%',
          boxShadow: '0 0 35px rgba(139, 92, 246, 0.15), 0 8px 32px rgba(139, 92, 246, 0.1)',
        }}
      />
      <div
        className="glass-shape absolute w-14 h-14 rounded-lg border border-[#00D9FF]/25 bg-[#00D9FF]/8 backdrop-blur-[4px]"
        style={{
          left: '60%',
          top: '30%',
          transform: 'rotate(-10deg)',
          boxShadow: '0 0 25px rgba(0, 217, 255, 0.2), 0 6px 24px rgba(0, 217, 255, 0.1)',
        }}
      />

      {/* Small floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="float-particle absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? 'rgba(0, 217, 255, 0.6)' : 'rgba(139, 92, 246, 0.6)',
            boxShadow: `0 0 ${6 + Math.random() * 8}px ${i % 2 === 0 ? 'rgba(0, 217, 255, 0.8)' : 'rgba(139, 92, 246, 0.8)'}`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
