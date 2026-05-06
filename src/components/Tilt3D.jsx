import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Tilt3D({ children, maxRotation = 8, scale = 1.02, className = '', glowColor = 'rgba(139, 92, 246, 0.3)' }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  useGSAP(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = ((y - centerY) / centerY) * -maxRotation
      const rotateY = ((x - centerX) / centerX) * maxRotation

      gsap.to(card, {
        rotateX,
        rotateY,
        scale,
        duration: 0.4,
        ease: 'power2.out',
      })

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: (x - centerX) * 0.3,
          y: (y - centerY) * 0.3,
          opacity: 0.6,
          duration: 0.4,
          ease: 'power2.out',
        })
      }
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      })

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: 0,
          y: 0,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
      }
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, { scope: cardRef })

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-[22px] opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
          filter: 'blur(30px)',
          transform: 'translateZ(-10px)',
        }}
      />
      <div
        ref={cardRef}
        className={className}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Tilt3D
