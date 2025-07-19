"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  growing: boolean
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const isMouseMoving = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor(window.innerWidth / 8), 150)

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 0.3 - 0.15
        const speedY = Math.random() * 0.3 - 0.15
        const opacity = Math.random() * 0.5 + 0.1
        const growing = Math.random() > 0.5

        // Random color from the theme palette with more variation
        const colors = [
          "rgba(253, 94, 255, 0.7)",
          "rgba(142, 124, 255, 0.7)",
          "rgba(255, 255, 255, 0.7)",
          "rgba(253, 94, 255, 0.4)",
          "rgba(142, 124, 255, 0.4)",
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]

        particles.current.push({ x, y, size, speedX, speedY, color, opacity, growing })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      isMouseMoving.current = true

      // Reset the flag after a short delay
      setTimeout(() => {
        isMouseMoving.current = false
      }, 100)
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        // Update size with pulsing effect
        if (particle.growing) {
          particle.size += 0.03
          if (particle.size > 3) {
            particle.growing = false
          }
        } else {
          particle.size -= 0.03
          if (particle.size < 0.5) {
            particle.growing = true
          }
        }

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Interactive effect when mouse is moving
        if (isMouseMoving.current) {
          const dx = mousePosition.current.x - particle.x
          const dy = mousePosition.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const angle = Math.atan2(dy, dx)
            const force = (150 - distance) / 150

            particle.x -= Math.cos(angle) * force * 2
            particle.y -= Math.sin(angle) * force * 2
          }
        }

        // Draw particle
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
        ctx.globalAlpha = 1
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x
          const dy = particles.current[i].y - particles.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.globalAlpha = ((120 - distance) / 120) * 0.2
            ctx.beginPath()
            ctx.moveTo(particles.current[i].x, particles.current[i].y)
            ctx.lineTo(particles.current[j].x, particles.current[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />
}
