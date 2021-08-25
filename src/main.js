// main.js
// All rights reserved

import {
  ATLAS_UI,
  CANVAS, COLORS, CONTEXT,
  PLAYER, MAX_HEALTH,
  NUM_OF_COLS, NUM_OF_TOPROWS
} from './utils/constants.js'

import { DATA_NPC } from './data/NPCs.js'
import { GAMESTATE_QUEST_LOG } from './utils/gamestates.js'
import { drawMap, drawNPC, drawSprite } from './utils/draw.js'
import { screen, setDimensions, sizeofTile } from './utils/dimensions.js'

let currentMap = 0
export function gotoNextMap () { currentMap = (currentMap + 1) % 2 }
// let currentState

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

  CONTEXT.fillStyle = COLORS.yellow
  CONTEXT.font = `${sizeofTile}px OpenSansPX`
  CONTEXT.textAlign = 'right'
  CONTEXT.textBaseline = 'middle'
  CONTEXT.fillText(`${PLAYER.experience}XP / Level ${PLAYER.level}`,
    (NUM_OF_COLS - 1) * sizeofTile, -sizeofTile / 2)

  for (let i = 1; i <= MAX_HEALTH; i++) {
    drawSprite(i, -1, ATLAS_UI, (PLAYER.health >= i) ? 0 : 1, 0)
  }

  // Draw the map
  drawMap(currentMap)
  DATA_NPC.forEach((NPC) => {
    if (NPC.map === currentMap) { drawNPC(NPC) }
  })

  GAMESTATE_QUEST_LOG.draw()

  CONTEXT.resetTransform()
  window.requestAnimationFrame(step)
}

window.onload = (event) => {
  setDimensions()
  window.requestAnimationFrame(step)
}

