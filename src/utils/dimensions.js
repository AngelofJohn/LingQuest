// src/utils/dimensions.js
// All rights reserved

import {
  CANVAS, CONTEXT,
  NUMOF_COLS, NUMOF_ROWS, NUMOF_TOPROWS,
  SIZEOF_SPRITE
} from './constants.js'

export const screen = {}
export let sizeofPixel
export let sizeofTile

export function setDimensions () {
  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight
  CONTEXT.imageSmoothingEnabled = false

  let factor = Math.min(CANVAS.height / (NUMOF_ROWS + NUMOF_TOPROWS),
    CANVAS.width / NUMOF_COLS)
  factor = Math.floor(factor)

  screen.width = NUMOF_COLS * factor
  screen.height = (NUMOF_ROWS + NUMOF_TOPROWS) * factor
  screen.xmargin = (CANVAS.width - screen.width) / 2
  screen.ymargin = (CANVAS.height - screen.height) / 2

  sizeofTile = screen.width / NUMOF_COLS
  sizeofPixel = sizeofTile / SIZEOF_SPRITE
}

window.onresize = setDimensions
