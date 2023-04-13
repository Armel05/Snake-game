

var canvas = document.getElementById('snake')

var canvas2d = canvas.getContext("2d"); 

var gameEnded = false;
canvas.width = 400;
canvas.height = 400; 

//  le nombre  de carré que le serpent occupera
var snakeSegments = [];
var snakeLength = 1;
// position initiale du serpent
var snakeX = 0;
var snakeY = 0;

//  mouvement du serpent 

function moveSnake() {
      snakeSegments.unshift({ x: snakeX, y: snakeY });
}

function drawSnake() {
      canvas2d.fillStyle = "red"; 
}

for (var i = 0; i < snakeSegments.length; i++) {
        canvas2d.fillRect(snakeSegments[i].x, snakeSegments[i].y, 10, 10);
} 

function gameLoop() {
      moveSnake();
     drawSnake();
} 