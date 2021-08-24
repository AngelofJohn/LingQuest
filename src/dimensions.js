// src/dimensions.js
// All rights reserved

import {
  CANVAS, CONTEXT,
  NUM_OF_COLUMNS, NUM_OF_ROWS, NUM_OF_TOPROWS,
  SIZEOF_SPRITE
} from './constants.js'

export const screen = {}
export let sizeofPixel
export let sizeofTile

export function setDimensions () {
  CANVAS.width = window.innerWidth
  CANVAS.height = window.innerHeight
  CONTEXT.imageSmoothingEnabled = false

  let factor = Math.min(CANVAS.height / (NUM_OF_ROWS + NUM_OF_TOPROWS),
    CANVAS.width / NUM_OF_COLUMNS)
  factor = Math.floor(factor)

  screen.width = NUM_OF_COLUMNS * factor
  screen.height = (NUM_OF_ROWS + NUM_OF_TOPROWS) * factor
  screen.xmargin = (CANVAS.width - screen.width) / 2
  screen.ymargin = (CANVAS.height - screen.height) / 2

  sizeofTile = screen.width / NUM_OF_COLUMNS
  sizeofPixel = sizeofTile / SIZEOF_SPRITE
  CONTEXT.font = `${sizeofTile}px OpenSansPX`
}

window.onresize = setDimensions
