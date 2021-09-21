// gamestates.js
// All rights reserved

import GameState from '../cls/GameState.js'
import { Button } from '../cls/Widget.js'
import { NUMOF_COLS, NUMOF_ROWS, PLAYER } from './constants.js'
import { DATA_QUEST } from '../data/quests.js'
import { drawBodyText } from './draw.js'
import { currentNPC, setQuest, switchtoGameState } from '../main.js'

const BTN_PRIM_POS = [2, NUMOF_ROWS - 3]
// const BTN_SCND_POS = [6, NUMOF_ROWS - 3]
const BTN_LAST_POS = [NUMOF_COLS - 5, NUMOF_ROWS - 3]
const BTN_CENT_POS = [(NUMOF_COLS - 3) / 2, NUMOF_ROWS - 3]

export const GAMESTATE_DEFAULT = new GameState('default', '', [], () => {})

export const GAMESTATE_QUESTLOG = new GameState('questlog',
  'Quest Log',
  [new Button(BTN_CENT_POS, 'Quit', 'red', () => {
    switchtoGameState(GAMESTATE_DEFAULT)
  })],
  () => {
    if (PLAYER.completedQuests.length === 0) {
      drawBodyText('You did not complete any quest yet.')
    }
  }
)

export const GAMESTATE_QUEST_SELECTION = new GameState('questSelection',
  'Select a quest',
  [
    new Button(BTN_LAST_POS, 'Select', 'green', (index) => {
      setQuest(DATA_QUEST[currentNPC.quests[index]])
      switchtoGameState(GAMESTATE_QUEST)
    }),
    new Button(BTN_PRIM_POS, 'Quit', 'red', () => {
      switchtoGameState(GAMESTATE_DEFAULT)
    })
  ],
  () => {}
)

export const GAMESTATE_QUEST = new GameState('quest',
  'Quest', // Updated by the setQuest function
  [new Button(BTN_CENT_POS, 'Quit', 'red', () => {
    switchtoGameState(GAMESTATE_DEFAULT)
  })],
  () => {}
)

export const GAMESTATE_GAME_OVER = new GameState('gameover',
  'Game Over', [], () => {}
)
