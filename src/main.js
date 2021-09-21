// main.js
// All rights reserved

import {
  ATLAS_UI,
  CANVAS, COLORS, CONTEXT,
  PLAYER, MAX_HEALTH,
  NUMOF_COLS, NUMOF_TOPROWS
} from './utils/constants.js'

import {
  GAMESTATE_DEFAULT,
  GAMESTATE_QUEST,
  GAMESTATE_QUESTLOG,
  GAMESTATE_QUEST_SELECTION
} from './utils/gameStates.js'

import { List } from './cls/Widget.js'
import { DATA_NPC } from './data/NPCs.js'
import { DATA_QUEST } from './data/quests.js'
import { drawMap, drawNPC, drawSprite } from './utils/draw.js'
import { screen, setDimensions, sizeofTile } from './utils/dimensions.js'

export let currentGameState = GAMESTATE_DEFAULT
export let currentMap = 0
export let currentNPC
export let currentQuest

export function gotoNextMap () { currentMap = (currentMap + 1) % 2 }
export function selectNPC (NPC) {
  currentNPC = NPC
  GAMESTATE_QUEST_SELECTION.widgets[2] = new List(3,
    currentNPC.quests.map(quest => DATA_QUEST[quest].title))
}
export function switchtoGameState (gameState) { currentGameState = gameState }
export function setQuest (quest) {
  currentQuest = quest
  GAMESTATE_QUEST.title = quest.title
}

function step (timestamp) {
  // Draw the background
  CONTEXT.fillStyle = COLORS.grey
  CONTEXT.fillRect(0, 0, CANVAS.width, CANVAS.height)

  CONTEXT.translate(screen.xmargin,
    screen.ymargin + NUMOF_TOPROWS * sizeofTile)

  // Draw the top bar
  CONTEXT.fillStyle = COLORS.black
  CONTEXT.fillRect(0, -NUMOF_TOPROWS * sizeofTile,
    screen.width, NUMOF_TOPROWS * sizeofTile)

  CONTEXT.fillStyle = COLORS.yellow
  CONTEXT.font = `${sizeofTile}px OpenSansPX`
  CONTEXT.textAlign = 'right'
  CONTEXT.textBaseline = 'middle'
  CONTEXT.fillText(`${PLAYER.experience}XP / Level ${PLAYER.level}`,
    (NUMOF_COLS - 1) * sizeofTile, -sizeofTile / 2)

  for (let i = 1; i <= MAX_HEALTH; i++) {
    drawSprite(i, -1, ATLAS_UI, [(PLAYER.health >= i) ? 0 : 1, 0])
  }

  // Draw the map
  drawMap(currentMap)
  DATA_NPC.forEach((NPC) => {
    if (NPC.map === currentMap) { drawNPC(NPC) }
  })

  switch (currentGameState.id) {
    case 'questlog':
      GAMESTATE_QUESTLOG.draw()
      break
    case 'questSelection':
      GAMESTATE_QUEST_SELECTION.draw()
      break
    case 'quest':
      GAMESTATE_QUEST.draw()
      break
  }

  CONTEXT.resetTransform()
  window.requestAnimationFrame(step)
}

window.onload = (event) => {
  setDimensions()
  window.requestAnimationFrame(step)
}
