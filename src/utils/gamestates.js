// gamestates.js
// All rights reserved

import GameState from '../cls/GameState.js'
import { Button } from '../cls/Widget.js'
import { COLORS, NUM_OF_COLS, NUM_OF_ROWS, PLAYER } from './constants.js'
import { drawBodyText } from './draw.js'

// BTN_PRIM_POS
// BTN_SCND_POS
// const BTN_LAST_POS = [NUM_OF_COLS - 5, NUM_OF_ROWS - 3]
const BTN_CENT_POS = [(NUM_OF_COLS - 3) / 2, NUM_OF_ROWS - 3]

export const GAMESTATE_DEFAULT = new GameState('default', '', [], () => {})

export const GAMESTATE_QUESTLOG = new GameState('questlog',
  'Quest Log',
  [new Button(BTN_CENT_POS, 'Quit', 'red', () => {})],
  () => {
    if (PLAYER.completedQuests.length === 0) {
      drawBodyText('You did not complete any quest yet.')
    }
  }
)

export const GAMESTATE_GAME_OVER = new GameState('gameover',
  'Game Over', [], () => {})
