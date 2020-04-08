const EventEmitter = require('events');

console.log('Welcome to the game');

var secretNumber;
var gameState = "levelSelection";
var eventEmitter = new EventEmitter();

levelSelection();

process.stdin.on('data', (input) => {
    switch (gameState) {
        case "levelSelection":
            manageLevelSelectionMenu(input);
            break;
        case "inGame":
            manageGameAnswear(input);
            break;
        case "restartMenu":
            manageRestartMenu(input.toString().trim());    
            break;
        default:
            break;
    }
});

function manageRestartMenu(input) {
    if(input == "y" || input == "Y") {
        gameState = "levelSelection";
        levelSelection();
    } else if (input == "n" || input == "N") {
        process.exit();
    } else {
        console.log('Do you want to play again? (Y/N)');
    }
}

function levelSelection() {
    console.log('Select your difficulty level:');
    console.log('1. easy (1 -10)');
    console.log('2. medium (1 -100)');
    console.log('3. difficult (1 -1000)');
}

function manageGameAnswear(input) {
    if(input == secretNumber) {
        console.log('Congratulation, you won');
        gameState = "restartMenu";
        console.log('Do you want to play again? (Y/N)');
    }
    else {
        manageLooseCase(input);
    }
}

function manageLevelSelectionMenu(input) {
    switch (input.toString().trim()) {
        case '1':
            gameState = "inGame";
            eventEmitter.emit('lanchGame', 10);
            break;
        case "2":
            gameState = "inGame";
            eventEmitter.emit('lanchGame', 100);
            break;
        case "3":
            gameState = "inGame";
            eventEmitter.emit('lanchGame', 1000);
            break;
        default:
            console.log('Sorry, the only possible anwsears are 1, 2 and 3');
            break;
    }
}

function manageLooseCase(input) {
    if (input > secretNumber) {
        console.log('Too high, make an other try');
        console.log('Please make a guess');
    }
    else {
        console.log('Too low, make an other try');
        console.log('Please make a guess');
    }
}

eventEmitter.on('lanchGame', (maxNumber) => {
    secretNumber = Math.round(Math.random()*maxNumber);
    console.log('Please make a guess');
});
