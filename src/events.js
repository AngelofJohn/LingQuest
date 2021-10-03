// events.js
// All rights reserved

import {
  GAMESTATE_DEFAULT,
  GAMESTATE_QUESTLOG,
  GAMESTATE_QUEST_SELECTION
} from './utils/gamestates.js'

import {
  currentGameState, currentMap,
  gotoNextMap, selectNPC, switchtoGameState
} from './main.js'

import { DATA_NPC } from './data/NPCs.js'
import { NUMOF_TOPROWS } from './utils/constants.js'
import { sizeofTile, screen } from './utils/dimensions.js'
import { isMouseInTile } from './utils/mouse.js'

function runAction (widget, mouseX, mouseY) {
  if (currentGameState.id === 'questSelection') {
    if (widget.isButton && widget.text === 'Select') {
      widget.action(currentGameState.widgets[2].index)
    } else if (widget.isList) {
      widget.action(mouseX, mouseY)
    } else {
      widget.action()
    }
  } else {
    widget.action()
  }
}

document.addEventListener('keydown', event => {
  if (event.keyCode <= 46) {
    if (event.keyCode === 13) {
      runAction(currentGameState.widgets[0])
    } else if (currentGameState.id === 'questSelection') {
      const list = currentGameState.widgets[2]
      if (event.keyCode === 38) { list.index = Math.max(0, list.index - 1) } else if (event.keyCode === 40) { list.index = Math.min(list.items.length - 1, list.index + 1) }
    }
  } else {
    const chr = String.fromCharCode(event.keyCode)
    switch (chr.toUpperCase()) {
      case 'M':
        if (currentGameState.id === 'default') { gotoNextMap() }
        break
      case 'L':
        if (currentGameState.id === 'questlog') { switchtoGameState(GAMESTATE_DEFAULT) } else { switchtoGameState(GAMESTATE_QUESTLOG) }
        break
    }
  }
})

document.addEventListener('click', event => {
  const mouseX = event.clientX - screen.xmargin
  const mouseY = event.clientY - screen.ymargin - NUMOF_TOPROWS * sizeofTile
  currentGameState.widgets.forEach((widget) => {
    for (let i = 0; i < widget.width; i++) {
      for (let j = 0; j < widget.height; j++) {
        if (isMouseInTile(mouseX, mouseY, widget.position[0] + i, widget.position[1] + j)) {
          runAction(widget, mouseX, mouseY)
        }
      }
    }
  })
  DATA_NPC.forEach((NPC) => {
    if (NPC.map === currentMap) {
      for (let i = -1; i < 2; i++) {
        if (isMouseInTile(mouseX, mouseY, NPC.position[0], NPC.position[1] + i)) {
          switchtoGameState(GAMESTATE_QUEST_SELECTION)
          selectNPC(NPC)
        }
      }
    }
  })
})
