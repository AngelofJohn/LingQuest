// gamestates.js
// All rights reserved

import { COLORS, NUM_OF_COLUMNS, NUM_OF_ROWS } from './constants.js'
import GameState from './cls/GameState.js'
import { Button } from './cls/Widget.js'

const BTN_QUIT_X = NUM_OF_COLUMNS - 5
const BTN_QUIT_Y = NUM_OF_ROWS - 3

export const STATE_GAME_OVER = new GameState(
  'Game Over',
  [new Button([BTN_QUIT_X, BTN_QUIT_Y], 'Quit', COLORS.red)],
  () => {}
)
