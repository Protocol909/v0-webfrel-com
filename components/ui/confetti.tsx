"use client"

import { useEffect, useRef } from "react"

interface ConfettiPiece {
  x: number
  y: number
  rotation: number
  scale: number
  vx: number
  vy: number
  vRotation: number
  color: string
  shape: "square" | "circle" | "triangle"
}

export function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)

  const fire = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Create canvas if it doesn't exist
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas")
      canvas.style.position = "fixed"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.pointerEvents = "none"
      canvas.style.zIndex = "9999"
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      document.body.appendChild(canvas)
      canvasRef.current = canvas
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = [
      "#FFD700",
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
    ]
    const shapes: ("square" | "circle" | "triangle")[] = ["square", "circle", "triangle"]

    const pieces: ConfettiPiece[] = []
    const pieceCount = 150

    // Create confetti pieces from center-top
    for (let i = 0; i < pieceCount; i++) {
      pieces.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 3,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
        vx: (Math.random() - 0.5) * 20,
        vy: Math.random() * -15 - 5,
        vRotation: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      })
    }

    const gravity = 0.3
    const friction = 0.99
    let frame = 0
    const maxFrames = 200

    const animate = () => {
      frame++
      if (frame > maxFrames) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        if (canvasRef.current) {
          document.body.removeChild(canvasRef.current)
          canvasRef.current = null
        }
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      pieces.forEach((piece) => {
        piece.vy += gravity
        piece.vx *= friction
        piece.x += piece.vx
        piece.y += piece.vy
        piece.rotation += piece.vRotation

        ctx.save()
        ctx.translate(piece.x, piece.y)
        ctx.rotate((piece.rotation * Math.PI) / 180)
        ctx.scale(piece.scale, piece.scale)
        ctx.fillStyle = piece.color

        const size = 10

        if (piece.shape === "square") {
          ctx.fillRect(-size / 2, -size / 2, size, size)
        } else if (piece.shape === "circle") {
          ctx.beginPath()
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.moveTo(0, -size / 2)
          ctx.lineTo(size / 2, size / 2)
          ctx.lineTo(-size / 2, size / 2)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (canvasRef.current) {
        document.body.removeChild(canvasRef.current)
      }
    }
  }, [])

  return { fire }
}
