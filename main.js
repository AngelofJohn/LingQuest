import { CANVAS, COLORS, CONTEXT } from './src/constants.js'
import { screen, setDimensions } from './src/dimensions.js'

CANVAS.width = window.innerWidth
CANVAS.height = window.innerHeight
setDimensions()

CONTEXT.fillStyle = COLORS.black
CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)
CONTEXT.fillStyle = COLORS.white
CONTEXT.fillRect(screen.xmargin / 2, screen.ymargin / 2,
  screen.width, screen.height)
