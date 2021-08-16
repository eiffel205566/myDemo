import { useRef, useEffect } from 'react'
import { Dot } from './Dot'

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

    const dot = new Dot(context)
    const dot2 = new Dot(context)
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
      if (frameCount === 6) {
        frameCount = 0
      } else {
        frameCount++
      }
      context.fillRect(100, 100, 100, 100)
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      context.translate(150, 150)
      context.rotate((Math.PI / 180) * ((frameCount / 5) * MAGIC_NUM))
      context.translate(-150, -150)
      context.fillRect(100, 100, 100, 100)
      // window.requestAnimationFrame(render)
      // * scale positionX move 1/2 of lengthX
      // let pic = new Image()
      // pic.src =
      //   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/108px-Star_full.svg.png'

      if (lengthX === 0) {
        sign = 1 //length is 0, flip sign to start increment length
      }
      if (lengthX === 100) {
        sign = 0 //length is max, flip sign to start decrement length
      }
      if (sign) {
        lengthX += 2
        positionX -= 1
      } else {
        lengthX -= 2
        positionX += 1
      }
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      context.fillStyle = 'transparent'
      context.drawImage(pic, positionX, 100, lengthX, 100)
      context.fillRect(positionX, 100, lengthX, 100)

      window.requestAnimationFrame(render)
      // * draw start
      // strokeStar(context, 100, 100, 30, 5, 0.5)
      // // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      // strokeStar(context, 100, 100, 30, 5, 0.5)
      // if (frameCount % 60 === 0) {
      //   context.translate(90, 0)
      //   context.scale(0.1, 1)
      //   console.log(60)
      //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      //   strokeStar(context, 100, 100, 30, 5, 0.5)
      // }
      // if (frameCount % 30 === 0 && frameCount % 60 !== 0) {
      //   // context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      //   context.scale(10, 1)
      //   context.translate(-90, 0)
      //   console.log(30)
      //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      //   strokeStar(context, 100, 100, 30, 5, 0.5)
      // }
      // context.translate(90, 0)
      // context.scale(0.1, 1)
      // strokeStar(context, 100, 100, 30, 5, 0.5)
      // // context.fillRect(100, 100, 100, 100)
      // context.scale(10, 1)
      // // strokeStar(context, 100, 100, 30, 5, 0.5)
      // context.translate(-90, 0)
      // // context.fillRect(100, 100, 100, 100)

      // let pic = new Image()
      // pic.src =
      //   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Star_full.svg/108px-Star_full.svg.png'

      // context.fillStyle = 'transparent'
      // context.drawImage(pic, 100, 100)
      // context.fillRect(positionX, 100, lengthX, 100)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  // useEffect(() => {
  //   console.log(canvasRef.current.getBoundingClientRect())
  //   // resizeCanvasToDisplaySize(canvasRef.current)
  // }, [draw])

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

/*
taken from: https://stackoverflow.com/questions/25837158/how-to-draw-a-star-by-using-canvas-html5/#answer-45140101
*/
function strokeStar(ctx, x, y, r, n = 5, inset = 0.5, initialColor) {
  ctx.save()
  ctx.beginPath()
  ctx.translate(x, y)
  ctx.moveTo(0, 0 - r)
  for (var i = 0; i < n; i++) {
    ctx.rotate(Math.PI / n)
    ctx.lineTo(0, 0 - r * inset)
    ctx.rotate(Math.PI / n)
    ctx.lineTo(0, 0 - r)
  }
  ctx.closePath()
  ctx.fillStyle = initialColor ? initialColor : 'blue'
  ctx.fill()
  ctx.restore()
}

export default useCanvas
