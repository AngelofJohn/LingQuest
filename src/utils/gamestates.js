// gamestates.js
// All rights reserved

import { COLORS, NUM_OF_COLS, NUM_OF_ROWS } from './constants.js'
import GameState from '../cls/GameState.js'
import { Button } from '../cls/Widget.js'

// BTN_PRIM_POS
// BTN_SCND_POS
const BTN_LAST_POS = [NUM_OF_COLS - 5, NUM_OF_ROWS - 3]

export const GAMESTATE_QUEST_LOG = new GameState(
  'Quest Log',
  [new Button(BTN_LAST_POS, 'Quit', 'red', () => {})],
  () => {}
)

export const GAMESTATE_GAME_OVER = new GameState('Game Over', [], () => {})
