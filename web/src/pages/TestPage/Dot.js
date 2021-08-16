import StarPic from '../TestPage/star.png'
export class Star {
  constructor(ctx) {
    this.ctx = ctx
    this.x = Math.random() * (ctx.canvas.width * 0.8)
    this.y = Math.random() * (ctx.canvas.height * 0.8)
    this.r = Math.random() * 30
    this.sizeLength = 100
    this.width = 100
    this.height = 100
    this.MAGIC_NUMBER = 9.549296585513721 //calculated as 180/Math.PI/6
    //speed is calculated as context.rotate((Math.PI / 180) * ((frameCount / this.rotateSpeed) * MAGIC_NUM))
    this.rotateSpeed = Math.floor(Math.random() * 5) + 5 //random number from 5 to 10
    this.src = StarPic
    this.sign = 0
    this.frameCount = 0
  }

  draw() {
    const img = new Image()
    img.src = this.src

    img.onload = () => {
      // * rotating
      if (this.frameCount === 6) {
        this.frameCount = 0
      } else {
        this.frameCount++
      }

      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2)
      this.ctx.rotate(
        (Math.PI / 180) * ((this.frameCount / 100) * this.MAGIC_NUMBER)
      )
      this.ctx.translate(
        -1 * (this.x + this.width / 2),
        -1 * (this.y + this.height / 2)
      )

      // * flipping effect by reducing width
      if (this.width === 0) {
        this.sign = 1 //length is 0, flip sign to start increment length
      }

      if (this.width === 100) {
        this.sign = 0 //length is max, flip sign to start decrement length
      }

      if (this.sign) {
        this.width += 2
        this.x -= 1
      } else {
        this.width -= 2
        this.x += 1
      }

      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      this.ctx.fillStyle = 'transparent'
      this.ctx.drawImage(img, this.x, this.y, this.width, this.height)
      this.ctx.fillRect(this.x, this.y, this.width, this.height)
      this.ctx.save()
    }
  }
}
