// src/constants.js
// All rights reserved

export const SIZEOF_SPRITE = 8

export const CANVAS = document.getElementById('game')
export const CONTEXT = CANVAS.getContext('2d')

export const NUM_OF_ROWS = 12
export const NUM_OF_COLUMNS = 18
export const NUM_OF_TOPROWS = 1

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
