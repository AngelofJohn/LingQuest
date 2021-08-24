// src/cls/GameState.js
// All rights reserved

import { drawOverlay } from '../utils/draw.js'

export default class GameState {
  constructor (title, widgets, draw) {
    this.title = title
    this.widgets = widgets
    this.draw = draw
  }

  drawScene () {
    drawOverlay(this.title)
    this.draw()
  }
}
