import { useRef, useEffect } from 'react'
import { Dot } from './Dot'

const useCanvas = (draw) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    resizeCanvasToDisplaySize(canvas)

    const dot = new Dot(context)
    const render = () => {
      resizeCanvasToDisplaySize(canvas)
      frameCount++
      dot.x += 1
      dot.y += 1

      if (frameCount < 50) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        dot.draw()
        // console.log(frameCount)
        window.requestAnimationFrame(render)
      } else {
        window.cancelAnimationFrame(animationFrameId)
        console.log('done')
      }
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  useEffect(() => {
    console.log(canvasRef.current.getBoundingClientRect())
    // resizeCanvasToDisplaySize(canvasRef.current)
  }, [draw])

  return canvasRef
}

function resizeCanvasToDisplaySize(canvas) {
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false
}

export default useCanvas
