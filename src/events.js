// events.js
// All rights reserved

import {
  GAMESTATE_DEFAULT,
  GAMESTATE_QUESTLOG,
  GAMESTATE_QUEST_SELECTION
} from './utils/gameStates.js'

import {
  currentGameState, currentMap,
  gotoNextMap, switchtoGameState
} from './main.js'

import { DATA_NPC } from './data/NPCs.js'
import { NUMOF_TOPROWS } from './utils/constants.js'
import { sizeofTile, screen } from './utils/dimensions.js'
import { isMouseInTile } from './utils/mouse.js'

document.addEventListener('keypress', event => {
  const chr = String.fromCharCode(event.keyCode)
  switch (chr.toUpperCase()) {
    case 'M':
      if (currentGameState.id === 'default') { gotoNextMap() }
      break
    case 'L':
      if (currentGameState.id === 'questlog') { switchtoGameState(GAMESTATE_DEFAULT) } else { switchtoGameState(GAMESTATE_QUESTLOG) }
      break
  }
})

document.addEventListener('click', event => {
  const mouseX = event.clientX - screen.xmargin
  const mouseY = event.clientY - screen.ymargin - NUMOF_TOPROWS * sizeofTile
  currentGameState.widgets.forEach((widget) => {
    for (let i = 0; i < widget.width; i++) {
      for (let j = 0; j < widget.height; j++) {
        if (isMouseInTile(mouseX, mouseY, widget.position[0] + i, widget.position[1] + j)) { widget.action() }
      }
    }
  })
  DATA_NPC.forEach((NPC) => {
    if (NPC.map === currentMap) {
      for (let i = -1; i < 2; i++) {
        if (isMouseInTile(mouseX, mouseY, NPC.position[0], NPC.position[1] + i)) {
          switchtoGameState(GAMESTATE_QUEST_SELECTION)
          // TODO: Set NPC to global current NPC
        }
      }
    }
  })
})
