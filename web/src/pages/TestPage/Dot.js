import StarPic from '../TestPage/star.png'
export class Star {
  constructor(ctx) {
    this.ctx = ctx
    this.x = Math.random() * (ctx.canvas.width * 0.8)
    this.y = Math.random() * (ctx.canvas.height * 0.8)
    this.r = Math.random() * 30
    this.sizeLength = 100
    this.MAGIC_NUMBER = 9.549296585513721 //calculated as 180/Math.PI/6
    //speed is calculated as context.rotate((Math.PI / 180) * ((frameCount / this.rotateSpeed) * MAGIC_NUM))
    this.rotateSpeed = Math.floor(Math.random() * 5) + 5 //random number from 5 to 10
    this.src = StarPic
  }

  draw() {
    const img = new Image()
    img.src = this.src
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.fillStyle = 'transparent'
    this.ctx.drawImage(img, 100, 100, this.sizeLength, this.sizeLength)
    this.ctx.fillRect(this.x, this.y, this.sizeLength, this.sizeLength)
    console.log(this.x, this.y)
  }
}
