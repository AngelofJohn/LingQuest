// src/utils/constants.js
// All rights reserved

export const SIZEOF_SPRITE = 8

export const CANVAS = document.getElementById('game')
export const CONTEXT = CANVAS.getContext('2d')

export const NUMOF_ROWS = 12
export const NUMOF_COLS = 18
export const NUMOF_TOPROWS = 1

export const COLORS = {
  black: '#000',
  grey: '#444',
  lightGrey: '#bbb',
  white: '#fff',
  green: '#7a6',
  red: '#f54',
  yellow: '#ff0'
}

export const MAX_HEALTH = 5
export const PLAYER = {
  answer: '',
  balance: 0.0,
  completedQuests: [],
  experience: 0,
  health: MAX_HEALTH,
  inventory: ['skipper'],
  level: 1,
  name: 'John'
}

// Atlases
export const ATLAS_MAP = new window.Image()
export const ATLAS_SKIN = new window.Image()
export const ATLAS_UI = new window.Image()

ATLAS_MAP.src = './assets/sprites/terrain.png'
ATLAS_SKIN.src = './assets/sprites/skins.png'
ATLAS_UI.src = './assets/sprites/user_interface.png'
