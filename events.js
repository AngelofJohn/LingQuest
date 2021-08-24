import { gotoNextMap } from './main.js'

document.addEventListener('keypress', (event) => {
	const chr = String.fromCharCode(event.keyCode)
	if (chr.toUpperCase() === 'M') { gotoNextMap() }
});

