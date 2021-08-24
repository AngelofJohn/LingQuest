import { sizeofTile } from '/src/dimensions.js'

export class Widget {
  constructor (position, width, heigth = 1) {
    this.position = position
    this.width = width
    this.heigth = heigth

    this.isDrawn = false
  }

  contains (position) {
    const x = position[0] / tileSize
    const y = position[1] / tileSize
    return x >= this.position[0] && x <= this.position[0] + this.width &&
            y >= this.position[1] && y <= this.position[1] + this.heigth
  }
}

class Button extends Widget {
  constructor (position, text, color, width, heigth = 1) {
    super(position, width, heigth)
    this.color = color
    this.text = text

    this.action = () => {}
  }

  draw () {
    this.isDrawn = true
    fill(this.color)
    rect(this.position[0] * tileSize, this.position[1] * tileSize,
      this.width * tileSize, this.heigth * tileSize)
    textAlign(CENTER, CENTER)
    fill(colors.white)
    textSize(tileSize / 2)
    text(this.text,
      (this.position[0] + this.width / 2) * tileSize,
      (this.position[1] + this.heigth / 2) * tileSize)
  }

  runAction () {
    this.action()
  }
}

class InputField extends Widget {
  constructor (position, width, heigth) {
    super(position, width, heigth)
  }

  draw () {
    textFont('Courier')
    textAlign(LEFT, BASELINE)
    fill(colors.black)
    textSize(tileSize / 2)
    for (let i = 0; i < this.width; i++) {
      text('_', (this.position[0] + i) * tileSize, (this.position[1] + 1 / 2) * tileSize)
      text(player.answer[i], (this.position[0] + i) * tileSize, (this.position[1] + 1 / 2) * tileSize)
    }
    textFont('Helvetica')
  }
}
