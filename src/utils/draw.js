// src/utils/draw
// All rights reserved

import { CONTEXT, SIZEOF_SPRITE } from '../constants.js'
import { sizeofTile } from '../dimensions.js'

export function drawSprite (cx, cy, atlas, ax, ay) {
  CONTEXT.drawImage(atlas,
    ax, ay, SIZEOF_SPRITE, SIZEOF_SPRITE,
    cx * sizeofTile, cy * sizeofTile, sizeofTile, sizeofTile
  )
}
