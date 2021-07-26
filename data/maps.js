const lookupTable = {
    "grass": [4, 0],
    "water TL": [11, 0],
    "water BL": [11, 2],
    "water T": [12, 0],
    "water": [12, 1],
    "water B": [12, 2],
    "water TR": [13, 0],
    "water BR": [13, 2],
    "water L": [14, 0],
    "water R": [14, 1],
    "flowers": [2, 14],
    "rock": [2, 15],
}

let mapData = [];
let mapIndex = 0;

mapData[0] = [
    ["grass", "grass", "rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "flowers", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "flowers", "water TL", "water TR", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "water TL", "water T", "water T", "water TR", "grass", "grass", "grass", "grass", "grass", "water BL", "water BR", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["flowers", "water L", "water", "water", "water R", "grass", "grass", "grass", "grass", "grass", "flowers", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "water L", "water", "water", "water R", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "water L", "water", "water", "water R", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "flowers", "grass", "grass", "grass"],
    ["grass", "water BL", "water B", "water B", "water BR", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "flowers", "grass", "grass", "grass", "grass", "flowers", "grass", "flowers", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "flowers", "rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
];

mapData[1] = [
    ["water TL", "water T", "water TR", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["water L", "water", "water R", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["water BL", "water B", "water BR", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "flowers", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "flowers", "flowers", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
    ["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
];
