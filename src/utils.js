function shuffleString(str) {
    return str.split('').sort(() => { 0.5 - Math.random() }).join('');
}

function isLetter(str) { return str.match(/^[a-z]$/i); }

function setDimensions() {
    var factor = min(windowHeight / (rowCount + topRows), windowWidth / columnCount);
    factor = Math.floor(factor);
    
    screenWidth = columnCount * factor;
    screenHeight = (rowCount + topRows) * factor;
    horizontalMargin = windowWidth - screenWidth;
    verticalMargin = windowHeight - screenHeight;
    
    tileSize = screenWidth / columnCount;
}

function containsNPCPoint(object, position) {
    const x = position[0] / tileSize;
    const y = position[1] / tileSize;
    return object.position[0] <= x
        && object.position[0] + 1 >= x
        && object.position[1] - 1 <= y
        && object.position[1] + 2 >= y;
}

function containsTileMouse(tileX, tileY, mouseX, mouseY) {
	const x = mouseX / tileSize;
	const y = mouseY / tileSize;
	return tileX <= x && tileX + 1 >= x
		&& tileY <= y && tileY + 1 >= y;
}

// Drawing

function drawSprite(inMap, atlas, inAtlas, res=16) {
    image(atlas, inMap[0] * tileSize, inMap[1] * tileSize, tileSize, tileSize,
        res*inAtlas[0], res*inAtlas[1], res, res);
}

function drawOverlay() {
    // Draw a semi-transparent overlay and tiles over it
    fill('#000a');
    rect(0, 0, columnCount*tileSize, rowCount*tileSize);
    for (var i = 1; i < rowCount - 1; i++) {
        for (var j = 1; j < columnCount - 1; j++) {
            drawSprite([j, i], spriteAtlas, [17, 5]);
        }
    }
}

function drawNPC(object) {
	if (object.map == mapIndex) {
	    drawSprite([object.position[0], object.position[1] + 1], skinsAtlas, [object.skin, 1], 4);
	    drawSprite(object.position, skinsAtlas, [object.skin, 0], 4);

        // Draw the NPC name on a black background
	    fill(colors.black);
	    rect(object.position[0] * tileSize, (object.position[1] - 3/4) * tileSize, tileSize, tileSize/2);
	    textAlign(CENTER, CENTER);
	    fill(colors.white);
	    textSize(tileSize / 3);
	    text(object.name, (object.position[0] + 1/2) * tileSize, (object.position[1] - 1/2) * tileSize);
	}
}
