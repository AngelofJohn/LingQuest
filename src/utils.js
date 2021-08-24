export function shuffleString (str) {
  return str.split('').sort(() => { return 0.5 - Math.random() }).join('')
}

export function isLetter (str) {
  return str.match(/^[a-z]$/i)
}
