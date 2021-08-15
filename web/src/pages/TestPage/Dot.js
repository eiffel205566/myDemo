// let PERSPECTIVE = width * 0.8 // The field of view of our 3D scene
// let PROJECTION_CENTER_X = width / 2 // x center of the canvas
// let PROJECTION_CENTER_Y = height / 2 // y center of the canvas

export class Dot {
  constructor(ctx) {
    this.x = (Math.random() - 0.5) * ctx.canvas.width // Give a random x position
    this.y = (Math.random() - 0.5) * ctx.canvas.height // Give a random y position
    this.z = Math.random() * ctx.canvas.width // Give a random z position
    this.radius = 10 // Size of our element in the 3D world
    this.ctx = ctx
    this.counter = 0
    this.timeId = null

    this.xProjected = 0 // x coordinate on the 2D world
    this.yProjected = 0 // y coordinate on the 2D world
    this.scaleProjected = 0 // Scale of the element on the 2D world (further = smaller)
  }
  // Project our element from its 3D world to the 2D canvas
  project() {
    // The scaleProjected will store the scale of the element based on its distance from the 'camera'
    this.scaleProjected =
      (this.ctx.canvas.width * 0.8) / (this.ctx.canvas.width * 0.8 + this.z)
    // The xProjected is the x position on the 2D world
    this.xProjected = this.x * this.scaleProjected + this.ctx.canvas.width / 2
    // The yProjected is the y position on the 2D world
    this.yProjected = this.y * this.scaleProjected + this.ctx.canvas.height / 2
  }
  // Draw the dot on the canvas
  draw() {
    // We first calculate the projected values of our dot
    this.project()
    // We define the opacity of our element based on its distance
    this.ctx.globalAlpha = Math.abs(1 - this.z / this.ctx.canvas.width)
    // We draw a rectangle based on the projected coordinates and scale
    this.ctx.fillRect(
      this.xProjected - this.radius,
      this.yProjected - this.radius,
      this.radius * 2 * this.scaleProjected,
      this.radius * 2 * this.scaleProjected
    )
  }

  drawRevised() {
    this.timeId = setTimeout(() => {
      this.draw()
      if (this.counter < 3) {
        this.x += 10
        this.y += 10
        this.timeId = setTimeout(() => {
          // this.ctx.clearRect(
          //   0,
          //   0,
          //   this.ctx.canvas.width,
          //   this.ctx.canvas.height
          // )
          this.drawRevised()
        }, 0)
        this.counter++
      } else {
        clearTimeout(this.timeId)
        console.log('done')
        return
      }
    }, 100)
  }
}
