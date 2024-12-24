import React, { useEffect, useRef } from 'react'

interface SnowOverlayProps {
  windowWidth: number
  windowHeight: number
  windowTop: number
  windowLeft: number
}

const SnowOverlay: React.FC<SnowOverlayProps> = ({ windowWidth, windowHeight, windowTop, windowLeft }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx : CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = windowWidth
    canvas.height = windowHeight

    const snowflakes: { x: number; y: number; radius: number; speed: number }[] = []

    // Create snowflakes
    for (let i = 0; i < 100; i++) {
      snowflakes.push({
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 1
      })
    }

    function drawSnowflakes() {
    if(ctx === null) return
      ctx.clearRect(0, 0, windowWidth, windowHeight)
      ctx.fillStyle = 'white'
      ctx.beginPath()
      for (let flake of snowflakes) {
        ctx.moveTo(flake.x, flake.y)
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true)
      }
      ctx.fill()
      moveSnowflakes()
      requestAnimationFrame(drawSnowflakes)
    }

    function moveSnowflakes() {
      for (let flake of snowflakes) {
        flake.y += flake.speed
        flake.x += Math.sin(flake.y / 30) * 0.5

        if (flake.y > windowHeight) {
          flake.y = 0
          flake.x = Math.random() * windowWidth
        }
      }
    }

    drawSnowflakes()

    return () => {
      // Clean up animation frame on component unmount
      cancelAnimationFrame(drawSnowflakes as unknown as number)
    }
  }, [windowWidth, windowHeight])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: `${windowTop}px`,
        left: `${windowLeft}px`,
        pointerEvents: 'none',
      }}
    />
  )
}

export default SnowOverlay

