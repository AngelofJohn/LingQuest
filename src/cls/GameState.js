// src/cls/GameState.js
// All rights reserved

import { drawOverlay } from '../utils/draw.js'

export default class GameState {
  constructor (title, widgets, draw_) {
    this.title = title
    this.widgets = widgets
    this.draw_ = draw_
  }

  draw () {
    drawOverlay(this.title)
    this.widgets.forEach(widget => widget.draw())
    this.draw_()
  }
}
