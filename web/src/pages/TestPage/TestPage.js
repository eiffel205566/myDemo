import React from 'react'
import Canvas from './Canvas'
import { Dot } from './Dot'

export const TestPage = () => {
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
    ctx.fill()
  }

  const drawDots = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const dot = new Dot(ctx)
    dot.draw()
    ctx.save()
  }

  return (
    <>
      <div>test</div>
      <div className="h-96 w-screen bg-gray-500">
        {/* <Canvas draw={draw} /> */}
        {/* <Canvas draw={drawDots} /> */}
        <Canvas className="h-full w-full" />
      </div>
    </>
  )
}
