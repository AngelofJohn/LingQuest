// src/cls/Widget.js
// All rights reserved

import { ATLAS_UI, COLORS, CONTEXT, NUMOF_COLS } from '../utils/constants.js'
import { LOOKUP_UI } from '../data/UI.js'
import { drawSprite } from '../utils/draw.js'
import { sizeofTile } from '../utils/dimensions.js'

export class Widget {
  constructor (position, width, height = 1) {
    this.position = position
    this.width = width
    this.height = height
    this.isDrawn = false
  }
}

export class Button extends Widget {
  constructor (position, text, style, action) {
    super(position, 3, 1)
    this.style = style
    this.text = text
    this.action = action
    this.isButton = true
  }

  draw () {
    this.isDrawn = true

    // Draw the button
    drawSprite(this.position[0] + 0, this.position[1],
      ATLAS_UI, LOOKUP_UI[`${this.style}Btn-Left`])
    drawSprite(this.position[0] + 1, this.position[1],
      ATLAS_UI, LOOKUP_UI[`${this.style}Btn-Center`])
    drawSprite(this.position[0] + 2, this.position[1],
      ATLAS_UI, LOOKUP_UI[`${this.style}Btn-Right`])

    // Draw the text
    CONTEXT.fillStyle = COLORS.white
    CONTEXT.font = `${sizeofTile}px OpenSansPX`
    CONTEXT.textAlign = 'center'
    CONTEXT.textBaseline = 'middle'
    CONTEXT.fillText(this.text,
      (this.position[0] + 3 / 2) * sizeofTile,
      (this.position[1] + 1 / 2) * sizeofTile
    )
  }
}

export class List extends Widget {
  constructor (positionY, items) {
    super([3, positionY], NUMOF_COLS - 4, items.length)
    this.items = items
    this.index = 0
    this.isList = true
  }

  action (mouseX, mouseY) {
    this.index = Math.floor(mouseY/sizeofTile - this.position[1])
  }

  draw () {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      CONTEXT.fillStyle = COLORS.black
      CONTEXT.font = `${sizeofTile}px OpenSansPX`
      CONTEXT.textAlign = 'left'
      CONTEXT.textBaseline = 'alphabetic'
      CONTEXT.fillText(`[${i === this.index ? 'x' : ' '}] ` + item,
        2 * sizeofTile,
        (this.position[1] + i + 1) * sizeofTile
      )
    }
  }
}
