// src/utils/draw
// All rights reserved

import {
  ATLAS_SKIN, ATLAS_MAP, COLORS, CONTEXT,
  NUM_OF_COLUMNS, NUM_OF_ROWS, SIZEOF_SPRITE
} from '../constants.js'

import { sizeofTile } from '../dimensions.js'
import { DATA_MAP, LOOKUP_MAP } from '../data/maps.js'

export function drawSprite (cx, cy, atlas, ax, ay) {
  CONTEXT.drawImage(atlas,
    ax * SIZEOF_SPRITE, ay * SIZEOF_SPRITE, SIZEOF_SPRITE, SIZEOF_SPRITE,
    cx * sizeofTile, cy * sizeofTile, sizeofTile, sizeofTile
  )
}

export function drawMap (mapIndex) {
  for (let i = 0; i < NUM_OF_ROWS; i++) {
    for (let j = 0; j < NUM_OF_COLUMNS; j++) {
      const inAtlas = LOOKUP_MAP[DATA_MAP[mapIndex][i][j]]
      drawSprite(j, i, ATLAS_MAP, inAtlas[0], inAtlas[1])
    }
  }
}

export function drawNPC (NPC) {
  drawSprite(NPC.position[0], NPC.position[1] + 1, ATLAS_SKIN, NPC.skin, 1)
  drawSprite(NPC.position[0], NPC.position[1] + 0, ATLAS_SKIN, NPC.skin, 0)

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
