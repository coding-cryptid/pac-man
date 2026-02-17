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