function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    setDimensions();
}

function mouseClicked() {
    const mousePosition = [
        mouseX - horizontalMargin/2,
        mouseY - verticalMargin/2 - topRows*tileSize
    ];
    // console.log(mousePosition[0] / tileSize, mousePosition[1] / tileSize);
    if (gameState === "default") {
        NPCData.forEach(
            object => { if (containsNPCPoint(object, mousePosition)) {
                    const questType = questData[object.quest].questType;
                    if (questType === "input") { currentQuest = new InputQuest(object.quest); }
                    if (questType === "multipleChoice") { currentQuest = new MCQuest(object.quest); }
                    gameState = "quest";
                }
            }
        );
    }
    if (gameState === "quest") {
        for (const [_, button] of Object.entries(currentQuest.buttons)) {
            if (button.contains(mousePosition) && button.isDrawn) { button.runAction(); }
        }
    }
    if (gameState === "quest" && currentQuest.questType === "multipleChoice") {
        for (let index = 0; index < currentQuest.proposedAnswers.length; index++) {
            if (Math.floor(mousePosition[1] / tileSize) == 5 + index) { player.answer = currentQuest.proposedAnswers[index]; }
        }
    }
}

function keyTyped() {
    if (currentQuest.type === "input" && isLetter(key)) {
        player.answer = player.answer + key;
        player.answer = player.answer.slice(0,
                currentQuest.solutions[currentQuest.currentQuestion].length);
    }
}

function keyPressed() {
	if (gameState === "default" && keyCode == BACKSPACE) {
        // Move to the next map
		mapIndex = (mapIndex + 1) % 2;
	}
    if (gameState === "quest" && currentQuest.type === "input" && keyCode == BACKSPACE) {
        // Erase the last caracter of the input box
        player.answer = player.answer.slice(0, -1);
    }
    if (gameState === "quest" && currentQuest.buttons["submit"].isDrawn && keyCode == ENTER) {
        currentQuest.buttons["submit"].runAction();
    }
}
