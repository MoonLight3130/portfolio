import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function GlowingRing({ className = '' }) {
  const ringRef = useRef(null)
  const glowRef = useRef(null)
  const innerGlowRef = useRef(null)

  useGSAP(() => {
    if (!ringRef.current) return

    // Slow rotation animation
    gsap.to(ringRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'none',
    })

    // Pulse effect on glow
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }

    if (innerGlowRef.current) {
      gsap.to(innerGlowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }
  }, { scope: ringRef })

  return (
    <div className={`relative ${className}`}>
      {/* Outer glow layer */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.5)',
        }}
      />
      
      {/* Inner glow layer */}
      <div
        ref={innerGlowRef}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 80%)',
          filter: 'blur(25px)',
          transform: 'scale(1.2)',
        }}
      />
      
      {/* Rotating ring */}
      <div
        ref={ringRef}
        className="absolute inset-0 rounded-full border-2 border-[#00D9FF]/30"
        style={{
          boxShadow: `
            0 0 30px rgba(0, 217, 255, 0.3),
            0 0 60px rgba(0, 217, 255, 0.2),
            0 0 90px rgba(139, 92, 246, 0.15),
            inset 0 0 30px rgba(0, 217, 255, 0.1)
          `,
        }}
      />
      
      {/* Second ring (counter-rotation) */}
      <div
        className="absolute inset-2 rounded-full border border-[#8B5CF6]/20"
        style={{
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)',
        }}
      />
    </div>
  )
}

export default GlowingRing
