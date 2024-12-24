import { useEffect, useRef } from 'react'

export default function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // These values are calculated based on the image proportions
  // The window takes approximately 25% of the image width and is centered
  const windowDimensions = {
    width: 300,
    height: 220,
    top: 100,
    left: '52%',
    transform: 'translateX(-50%)'
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx : CanvasRenderingContext2D | null = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = windowDimensions.width
    canvas.height = windowDimensions.height

    const snowflakes: { x: number; y: number; radius: number; speed: number; opacity: number }[] = []

    // Create snowflakes with varying opacity for more depth
    for (let i = 0; i < 150; i++) {
      snowflakes.push({
        x: Math.random() * windowDimensions.width,
        y: Math.random() * windowDimensions.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5
      })
    }

    function drawSnowflakes() {
        if(ctx !== null) {
        ctx.clearRect(0, 0, windowDimensions.width, windowDimensions.height)
      for (let flake of snowflakes) {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()
        }
      }
      
      moveSnowflakes()
      requestAnimationFrame(drawSnowflakes)
    }

    function moveSnowflakes() {
      for (let flake of snowflakes) {
        flake.y += flake.speed
        flake.x += Math.sin(flake.y / 30) * 0.5

        if (flake.y > windowDimensions.height) {
          flake.y = 0
          flake.x = Math.random() * windowDimensions.width
        }
      }
    }

    drawSnowflakes()

    return () => {
      cancelAnimationFrame(drawSnowflakes as unknown as number)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#f5e6e6]">
      <div className="relative w-full max-w-screen mx-auto">
        <img
          src="/portfolio_me.jpg"
          alt="Minimalist workspace with mountain view"
          className="w-screen h-screen"
        />
        <canvas
          ref={canvasRef}
          className="absolute pointer-events-none"
          style={{
            width: windowDimensions.width,
            height: windowDimensions.height,
            top: windowDimensions.top,
            left: windowDimensions.left,
            transform: windowDimensions.transform,
            borderRadius: '100px 100px 0 0', // Match the arch shape
            overflow: 'hidden'
          }}
        />
      </div>
    </div>
  )
}

