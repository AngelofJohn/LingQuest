// src/utils/draw
// All rights reserved

import {
  ATLAS_SKIN, ATLAS_MAP, ATLAS_UI, COLORS, CONTEXT,
  NUM_OF_COLS, NUM_OF_ROWS, SIZEOF_SPRITE
} from './constants.js'

import { DATA_MAP, LOOKUP_MAP } from '../data/maps.js'
import { LOOKUP_UI } from '../data/UI.js'
import { sizeofTile } from '../utils/dimensions.js'

export function drawSprite (cx, cy, atlas, inAtlas) {
  CONTEXT.drawImage(atlas,
    inAtlas[0] * SIZEOF_SPRITE, inAtlas[1] * SIZEOF_SPRITE,
    SIZEOF_SPRITE, SIZEOF_SPRITE,
    cx * sizeofTile, cy * sizeofTile, sizeofTile, sizeofTile
  )
}

export function drawMap (mapIndex) {
  for (let i = 0; i < NUM_OF_ROWS; i++) {
    for (let j = 0; j < NUM_OF_COLS; j++) {
      const inAtlas = LOOKUP_MAP[DATA_MAP[mapIndex][i][j]]
      drawSprite(j, i, ATLAS_MAP, inAtlas)
    }
  }
}

export function drawNPC (NPC) {
  drawSprite(NPC.position[0], NPC.position[1] + 1, ATLAS_SKIN, [NPC.skin, 1])
  drawSprite(NPC.position[0], NPC.position[1] + 0, ATLAS_SKIN, [NPC.skin, 0])

  // Draw the name of the NPC on a black background
  CONTEXT.fillStyle = COLORS.black
  CONTEXT.fillRect(
    (NPC.position[0] - 1 / 4) * sizeofTile,
    (NPC.position[1] - 3 / 4) * sizeofTile,
    1.5 * sizeofTile, sizeofTile / 2
  )

  CONTEXT.fillStyle = COLORS.white
  CONTEXT.font = `${sizeofTile / 2}px OpenSansPX`
  CONTEXT.textAlign = 'center'
  CONTEXT.textBaseline = 'middle'
  CONTEXT.fillText(NPC.name,
    (NPC.position[0] + 1 / 2) * sizeofTile,
    (NPC.position[1] - 1 / 2) * sizeofTile
  )
}

export function drawOverlay (title) {
  CONTEXT.fillStyle = '#000a'
  CONTEXT.fillRect(0, 0, NUM_OF_COLS * sizeofTile, NUM_OF_ROWS * sizeofTile)

  // Draw center
  for (let i = 2; i < NUM_OF_ROWS - 2; i++) {
    for (let j = 2; j < NUM_OF_COLS - 2; j++) {
      drawSprite(j, i, ATLAS_UI, LOOKUP_UI.overlay)
    }
  }

  // Draw sides
  for (let i = 2; i < NUM_OF_ROWS - 2; i++) {
    drawSprite(1, i, ATLAS_UI, LOOKUP_UI['overlay L'])
    drawSprite(NUM_OF_COLS - 2, i, ATLAS_UI, LOOKUP_UI['overlay R'])
  }
  for (let i = 2; i < NUM_OF_COLS - 2; i++) {
    drawSprite(i, 1, ATLAS_UI, LOOKUP_UI['overlay T'])
    drawSprite(i, NUM_OF_ROWS - 2, ATLAS_UI, LOOKUP_UI['overlay B'])
  }

  // Draw corners
  drawSprite(1, 1, ATLAS_UI, LOOKUP_UI['overlay TL'])
  drawSprite(NUM_OF_COLS - 2, 1, ATLAS_UI, LOOKUP_UI['overlay TR'])
  drawSprite(1, NUM_OF_ROWS - 2, ATLAS_UI, LOOKUP_UI['overlay BL'])
  drawSprite(NUM_OF_COLS - 2, NUM_OF_ROWS - 2,
    ATLAS_UI, LOOKUP_UI['overlay BR'])

  if (title !== '') {
    // Draw title
    CONTEXT.fillStyle = COLORS.black
    CONTEXT.font = `${sizeofTile}px OpenSansPX`
    CONTEXT.textAlign = 'left'
    CONTEXT.textBaseline = 'middle'
    CONTEXT.fillText(title, 2 * sizeofTile, 2 * sizeofTile)
  }
}
