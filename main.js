// main.js
// All rights reserved

import {
  CANVAS, COLORS, CONTEXT,
  PLAYER, MAX_HEALTH,
  NUM_OF_COLUMNS, NUM_OF_TOPROWS
} from './src/constants.js'

import { screen, setDimensions, sizeofTile } from './src/dimensions.js'
import { drawSprite } from './src/utils/draw.js'

const atlasUI = new window.Image()
atlasUI.src = './assets/sprites/user_interface.png'

function step (timestamp) {
  // Draw the background
  CONTEXT.fillStyle = COLORS.grey
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)

  CONTEXT.translate(screen.xmargin,
    screen.ymargin + NUM_OF_TOPROWS * sizeofTile)

  // Draw the top bar
  CONTEXT.fillStyle = COLORS.black
  CONTEXT.fillRect(0, -NUM_OF_TOPROWS * sizeofTile,
    screen.width, NUM_OF_TOPROWS * sizeofTile)

  CONTEXT.textAlign = 'right'
  CONTEXT.textBaseline = 'middle'
  CONTEXT.fillStyle = COLORS.yellow
  CONTEXT.fillText(`${PLAYER.experience}XP / Level ${PLAYER.level}`,
    (NUM_OF_COLUMNS - 1) * sizeofTile, -sizeofTile / 2)

  for (let i = 1; i <= MAX_HEALTH; i++) {
    drawSprite(i, -1, atlasUI, (PLAYER.health >= i) ? 0 : 1, 0)
  }

  // Draw the map
  CONTEXT.fillStyle = COLORS.green
  CONTEXT.fillRect(0, 0, screen.width, screen.height)

  CONTEXT.resetTransform()
  window.requestAnimationFrame(step)
}

window.onload = (event) => {
  setDimensions()
  console.log(`Hello ${PLAYER.name}!`)
  // Draw the game
  window.requestAnimationFrame(step)
}
