// Dimensions
let screenWidth, screenHeight;
let horizontalMargin, verticalMargin;
let tileWidth, tileHeight;

// Sprites
let spriteAtlas, skinsAtlas, UIAtlas;

// Quests
let currentQuest;
let gameState = "default";

function preload() {
	spriteAtlas = loadImage("assets/sprites/serene_village.png");
	UIAtlas = loadImage("assets/sprites/user_interface.png");
	skinsAtlas = loadImage("assets/sprites/skins.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	setDimensions();

	textFont('Helvetica');
	noSmooth();

	currentQuest = new InputQuest("welcome");
}

function draw() {
	if (player.health <= 0) { gameState = "game_over"; }

	fill(colors.grey);
	rect(0, 0, windowWidth, windowHeight)
	translate(horizontalMargin/2, verticalMargin/2);

	// Topbar
	fill(colors.black);
	noStroke();
	rect(0, 0, screenWidth, topRows*tileSize);
	for (let i = 1; i <= Player.maxHealth; i++) {
		drawSprite([i - 1/2, 0], UIAtlas, [(player.health >= i) ? 0 : 1, 0], 8);
	}
	textAlign(RIGHT, CENTER);
	fill(colors.yellow);
	textSize(tileSize / 2);
	text(`${player.experience}XP / Level ${player.level}`, (columnCount - 1/2) * tileSize, tileSize/2);

	// Map
	translate(0, topRows*tileSize);
	for (var i = 0; i < rowCount; i++) {
		for (var j = 0; j < columnCount; j++) {
			drawSprite([j, i], spriteAtlas, lookupTable["grass"]);
			let inAtlas = lookupTable[mapData[mapIndex][i][j]];
			drawSprite([j, i], spriteAtlas, inAtlas);
		}
	}

	// NPCs
	NPCData.forEach(drawNPC);

	if (gameState == "quest") { currentQuest.draw(); }
	if (gameState == "profile") { player.drawProfile(); }
	if (gameState == "game_over") { player.drawGameOver(); }
	if (gameState == "quest_log") { player.drawQuestLog(); }
}
