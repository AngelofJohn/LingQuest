// src/cls/Widget.js
// All rights reserved

import { ATLAS_UI, COLORS, CONTEXT } from '../constants.js'
import { LOOKUP_UI } from '../data/UI.js'
import { drawSprite } from '../utils/draw.js'
import { sizeofTile } from '../dimensions.js'

export class Widget {
  constructor (position, width, heigth = 1) {
    this.position = position
    this.width = width
    this.heigth = heigth
    this.isDrawn = false
  }
}

export class Button extends Widget {
  constructor (position, text, style, action) {
    super(position, 3, 1)
    this.style = style
    this.text = text
    this.action = action
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
