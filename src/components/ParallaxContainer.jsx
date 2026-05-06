import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useSmoothMousePosition } from '../hooks/useMousePosition'

function ParallaxContainer({ children, intensity = 1 }) {
  const containerRef = useRef(null)
  const mousePosition = useSmoothMousePosition(0.05)

  useGSAP(() => {
    if (!containerRef.current) return

    const layers = containerRef.current.querySelectorAll('.parallax-layer')
    
    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth) || 0.5
      const moveX = mousePosition.x * depth * intensity * 30
      const moveY = mousePosition.y * depth * intensity * 30

      gsap.to(layer, {
        x: moveX,
        y: moveY,
        duration: 1.2,
        ease: 'power2.out',
      })
    })
  }, { 
    scope: containerRef,
    dependencies: [mousePosition.x, mousePosition.y, intensity]
  })

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  )
}

export default ParallaxContainer
