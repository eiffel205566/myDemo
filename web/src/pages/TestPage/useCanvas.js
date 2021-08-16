import { useRef, useEffect } from 'react'
import { Star } from './Dot'

const MAGIC_NUM = 9.549296585513721

const useCanvas = (draw) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 1
    let sign = 0
    let animationFrameId
    resizeCanvasToDisplaySize(canvas)
    let pic = new Image()
    pic.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/108px-Star_full.svg.png'

    let positionX = 100
    let lengthX = 100

    const star = new Star(context)

    const render = () => {
      // * disposition
      // resizeCanvasToDisplaySize(canvas)
      // frameCount++
      // dot.x += 5
      // dot.y += 5
      // dot2.x -= 1
      // dot2.y -= 1
      // if (frameCount < 50) {
      //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      //   dot.draw()
      //   dot2.draw()
      //   // console.log(frameCount)
      //   window.requestAnimationFrame(render)
      // } else {
      //   window.cancelAnimationFrame(animationFrameId)
      //   console.log('done')
      // }
      // * rotate
      // if (frameCount === 6) {
      //   frameCount = 0
      // } else {
      //   frameCount++
      // }
      // context.fillRect(100, 100, 100, 100)
      // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      // context.translate(150, 150)
      // context.rotate((Math.PI / 180) * ((frameCount / 5) * MAGIC_NUM))
      // context.translate(-150, -150)
      // context.fillRect(100, 100, 100, 100)
      // window.requestAnimationFrame(render)
      // * scale positionX move 1/2 of lengthX
      // if (lengthX === 0) {
      //   sign = 1 //length is 0, flip sign to start increment length
      // }
      // if (lengthX === 100) {
      //   sign = 0 //length is max, flip sign to start decrement length
      // }
      // if (sign) {
      //   lengthX += 2
      //   positionX -= 1
      // } else {
      //   lengthX -= 2
      //   positionX += 1
      // }
      // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      // context.fillStyle = 'transparent'
      // context.drawImage(pic, positionX, 100, lengthX, 100)
      // context.fillRect(positionX, 100, lengthX, 100)
      // window.requestAnimationFrame(render)
      // // * draw start
      star.draw()
      // context.fillRect(330, 150, 100, 100)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
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
