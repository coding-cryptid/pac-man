//board 
let gameBoard;
const rowCount = 21;
const colCount = 19;
const tileSize = 32;
const gameBoardWidth = colCount * tileSize;
const gameBoardHeight = rowCount * tileSize;
let context;

//images
let blueGhostImage;
let redGhostImage;
let pinkGhostImage;
let orangeGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function() {
    gameBoard = this.document.getElementById("gameBoard");
    gameBoard.height = gameBoardHeight;
    gameBoard.width = gameBoardWidth;
    context = gameBoard.getContext("2d");
}

function loadImages() {
    wallImage = new Image();
    wallImage.src = "./wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./blueGhost.png";

    redGhostImage = new Image();
    redGhostImage.src = "./redGhost.png";

    pinkGhostImage = new Image();
    pinkGhostImage.src = "./pinkGhost.png";

    orangeGhostImage = new Image();
    orangeGhostImage.src = "./orangeGhost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./pacmanUp.png";

    pacmanDownImage = new Image();
    pacmanDownImage.src = "./pacmanDown.png";

    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./pacmanLeft.png";

    pacmanRightImage = new Image();
    pacmanRightImage.src = "./pacmanRight.png";
}