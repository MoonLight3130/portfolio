import { useState, useEffect, useRef } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const updatePosition = () => {
      setPosition(mouseRef.current)
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(updatePosition)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return position
}

export function useSmoothMousePosition(smoothing = 0.08) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * smoothing
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * smoothing
      setPosition({ ...currentRef.current })
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [smoothing])

  return position
}
