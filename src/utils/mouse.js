// src/utils/mouse.js
// All rights reserved

import { sizeofTile } from './dimensions.js'

export function isMouseInTile (mouseX, mouseY, x, y) {
  return mouseX >= x * sizeofTile &&
    mouseX <= (x + 1) * sizeofTile &&
    mouseY >= y * sizeofTile &&
    mouseY <= (y + 1) * sizeofTile
}
