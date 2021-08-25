// events.js
// All rights reserved

import { currentGameState, gotoNextMap, switchtoGameState } from './main.js'
import { GAMESTATE_DEFAULT, GAMESTATE_QUESTLOG } from './utils/gameStates.js'

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
