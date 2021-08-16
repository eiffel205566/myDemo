let frameCount = 1
const MAGIC_NUM = 9.549296585513721

const rotate = (context) => {
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
  window.requestAnimationFrame(render)
}
