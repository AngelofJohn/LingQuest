class Player {
    static maxHealth = 5;

    constructor() {
        this.balance = .0;
        this.experience = 0;
        this.health = 4;
        this.level = 1;
        this.name = "John";

        this.inventory = ["skipper"];
        this.equipment = [];
        this.completedQuests = [];

        this.answer = '';
        this.buttons = {
            "quit": new Button([columnCount-5, rowCount-3], "Quit", colors.red, 3)
        }
        this.buttons["quit"].action = () => { gameState = "default"; }
    }

    dump() { } // TODO
    load() { } // TODO
    
    drawProfile() {
    	drawOverlay();

        // Draw the player's name
    	textAlign(LEFT, BASELINE);
        textSize(tileSize);
        fill(colors.black);
        text(this.name, 2*tileSize, 3*tileSize);

        // Draw the player on a background
        for (var i = 4; i < 8; i++) {
	        for (var j = 2; j < 6; j++) {
	            drawSprite([j, i], spriteAtlas, [4, 0]);
	        }
	    }
        // TODO: Draw the actual skin
	    drawSprite([3, 6], skinsAtlas, [0, 1], 4);
	    drawSprite([3, 5], skinsAtlas, [0, 0], 4);

        // Draw inventory slots
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 4; j++) {
                fill(colors.lightGrey);
                stroke(colors.black);
                strokeWeight(1);
                rect((i + 8) * tileSize, (j + 4) * tileSize, tileSize, tileSize);
				if (i*8 + j < this.inventory.length) {
					let itemPos = itemData[this.inventory[i*8 + j]].position;
					drawSprite([(i + 8), (j + 4)], UIAtlas, itemPos, 8);
				}
            }
        }

        // Draw equipment slots
        for (var j = 0; j < 4; j++) {
            rect(6 * tileSize, (j + 4) * tileSize, tileSize, tileSize);
			if (j < this.equipment.length) {
				let itemPos = itemData[this.equipment[j]].position;
				drawSprite([6, (j + 4)], UIAtlas, itemPos, 8)
			}
        }

        noStroke();
        this.buttons["quit"].draw();
    }

	drawGameOver() {
		drawOverlay();
		textAlign(CENTER, CENTER);
		textSize(tileSize);
		fill(colors.black);
		text("Game Over", screenWidth/2, screenHeight/2);
	}

	drawQuestLog() {
		drawOverlay();
		// TODO: draw the quest log
		// this.completedQuests
	}
}

const player = new Player();
