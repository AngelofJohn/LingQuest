import {
  CANVAS, NUM_OF_COLUMNS, NUM_OF_ROWS, NUM_OF_TOPROWS
} from './constants.js'

export let screen = {}
export let sizeofTile

export function setDimensions () {
  let factor = Math.min(CANVAS.height / (NUM_OF_ROWS + NUM_OF_TOPROWS),
    CANVAS.width / NUM_OF_COLUMNS)
  factor = Math.floor(factor)

  screen.width = NUM_OF_COLUMNS * factor
  screen.height = (NUM_OF_ROWS + NUM_OF_TOPROWS) * factor
  screen.xmargin = CANVAS.width - screen.width
  screen.ymargin = CANVAS.height - screen.height

  sizeofTile = screen.width / NUM_OF_COLUMNS
}
