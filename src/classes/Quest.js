class Quest {
    constructor(id) {
        Object.assign(this, questData[id])
		this.id = id;
        this.currentQuestion = -1;
        this.skippable = true;

        // Buttons
        this.buttons = {
            "decline": new Button([columnCount-5, rowCount-3], "Decline", colors.red, 3),
            "quit": new Button([columnCount-5, rowCount-3], "Quit", colors.red, 3),
            "accept": new Button([2, rowCount-3], "Accept", colors.green, 3),
            "submit": new Button([2, rowCount-3], "Submit", colors.green, 3),
            "skip": new Button([6, rowCount-3], "Skip", colors.green, 3)
        }

        this.buttons["decline"].action = () => { gameState = "default"; }
        this.buttons["quit"].action = () => { gameState = "default"; }
        this.buttons["accept"].action = () => {
            this.currentQuestion += 1;
            this.setupQuestion();
        }
        this.buttons["submit"].action = () => {
            if (player.answer.toLowerCase() == this.solutions[this.currentQuestion].toLowerCase()) {
                player.balance += 2;
                this.currentQuestion += 1;
                if (this.currentQuestion < this.questions.length) {
                	this.setupQuestion();
                } else {
		            player.experience += this.experience;
		            while (player.experience >= 100 * player.level*20) {
    		            player.experience -= 100 * player.level*20;
            		    player.level += 1;
					}
	            	player.completedQuests.push(this);
            	}
            } else {
                player.health = max(0, player.health - 1);
            }
            player.answer = '';
        }
        this.buttons["skip"].action = () => {
            this.currentQuestion += 1;
            this.skippable = false;
            if (this.currentQuestion < this.questions.length)
            	this.setupQuestion();
        }
    }

    drawIntroduction() {
        this.buttons["accept"].draw();
        this.buttons["decline"].draw();

        textAlign(LEFT, BASELINE);
        textSize(tileSize / 2);
        fill(colors.black);
        text(this.introduction, 2*tileSize, 4*tileSize, (columnCount - 4)*tileSize);
    }

    drawTermination() {
        this.buttons["quit"].draw();

        textAlign(LEFT, BASELINE);
        textSize(tileSize / 2);
        fill(colors.black);
        text(this.termination + "\n\nYour earned XP and bytes, congrats!",
            2*tileSize, 4*tileSize, (columnCount - 4)*tileSize);
    }

    draw() {
        for (const [_, button] of Object.entries(this.buttons))
        	button.isDrawn = false;

        drawOverlay();

        textAlign(LEFT, BASELINE);
        textSize(tileSize);
        fill(colors.black);
        text(this.title, 2*tileSize, 3*tileSize);

        if (this.currentQuestion === -1)
        	this.drawIntroduction();
        else if (this.currentQuestion >= this.questions.length)
            this.drawTermination();
        else {
            this.buttons["submit"].draw();
            if (this.skippable) {
                // TODO: check if the skipper is equipped
                this.buttons["skip"].draw();
            }
            this.buttons["quit"].draw();

            textAlign(LEFT, BASELINE);
            fill(colors.black);
            textSize(tileSize);
            text(`${this.currentQuestion + 1}/${this.questions.length}`, (columnCount-4)*tileSize, 3*tileSize);
        }
    }
}


class InputQuest extends Quest {
    constructor(id) {
        super(id);
        this.type = "input";
        this.inputField = new InputField([2, 5], 4);
    }

    setupQuestion () {
        player.answer = '';
    }

    draw() {
        Quest.prototype.draw.call(this);
        if (this.currentQuestion >= 0 && this.currentQuestion < this.questions.length) {
            textAlign(LEFT, BASELINE);
            fill(colors.black);
            textSize(tileSize / 2);
            text(this.questions[this.currentQuestion], 2*tileSize, 4*tileSize, (columnCount - 4)*tileSize);
            this.inputField.width = this.solutions[this.currentQuestion].length;
            this.inputField.draw();
        }
    }
}

class MCQuest extends Quest {
    constructor(id) {
        super(id);
        this.type = "multipleChoice";
        this.proposedAnswers = [];
        this.statement = '';
    }

    setupQuestion () {
        player.answer = '';
        this.statement = this.questions[this.currentQuestion].split('\n')[0];
        this.proposedAnswers = this.questions[this.currentQuestion].split('\n').slice(1);
    }

    draw() {
        Quest.prototype.draw.call(this);
        if (this.currentQuestion >= 0 && this.currentQuestion < this.questions.length) {
            textAlign(LEFT, BASELINE);
            fill(colors.black);
            textSize(tileSize / 2);
            text(this.statement, 2*tileSize, 4*tileSize, (columnCount - 4)*tileSize);

            let counter = 0;
            this.proposedAnswers.forEach(answer => {
                if (player.answer === this.proposedAnswers[counter])
                	fill(colors.black);
                else
                	noFill();
                stroke(colors.black);
                strokeWeight(2);
                rect(2.25*tileSize, (5 + counter)*tileSize, tileSize/2, tileSize/2);

                fill(colors.black);
                strokeWeight(0);
                text(this.proposedAnswers[counter], 3*tileSize, (5 + counter)*tileSize, (columnCount - 4)*tileSize);
                counter += 1;
            });
        }
    }
}
