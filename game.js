'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tunnelWidth = 100;

const playerX = 250;
const playerY = 50;
const playerSize = 25;
const playerSpeed = 10;

// TODO: for some reason keypresses are not working
$(document).keypress((key) => {
  if (key.which === 37) {
    playerX += playerSpeed; // LEFT
  }
  if (key.which === 39) {
    playerX -= playerSpeed; // RIGHT
  }
  if (key.which === 38) {
    playerY += playerSpeed; // UP
  }
  if (key.which === 40) {
    playerY -= playerSpeed; // DOWN
  }
});

// rect( x , y , width , height)
// VER pencil.rect(200, 700, tunnelWidth, 200);
// HOR pencil.rect(200, 700, 200, tunnelWidth);

function drawTunnels() {
  pencil.beginPath();

  pencil.rect(200, 0, tunnelWidth, 400);
  pencil.rect(50, 300,450, tunnelWidth);
  pencil.rect(400, 200, tunnelWidth, 200);
  pencil.rect(400, 200, 250, tunnelWidth);
  pencil.rect(200, 0, 900, tunnelWidth);

  pencil.rect(650, 200, tunnelWidth, 350);
  pencil.rect(1050, 0, tunnelWidth, 550);
  pencil.rect(800, 450, 500, tunnelWidth);
  pencil.rect(500, 550, 400, tunnelWidth);
  pencil.rect(1300, 450, tunnelWidth, 550);

  pencil.rect(0, 300, tunnelWidth, 450);
  pencil.rect(400, 300, tunnelWidth, 700);
  pencil.rect(0, 750, 750, tunnelWidth)
  pencil.rect(450, 900, 300, tunnelWidth)
  pencil.rect(750, 750, tunnelWidth, 450);

  pencil.rect(800, 750, 500, tunnelWidth);
  pencil.rect(1150, 1000, 450, tunnelWidth);
  pencil.rect(1050, 750, tunnelWidth, 350);
  pencil.rect(850, 50, tunnelWidth, 200);
  pencil.rect(850, 250, 450, tunnelWidth);

  pencil.rect(1200, 250, tunnelWidth, 200);
  pencil.rect(800, 550, tunnelWidth, 200);
  pencil.rect(1050, 550, tunnelWidth, 200);
  pencil.rect(400, 1200, 700, 400)

  pencil.fillStyle = 'black';
  pencil.fill();
  pencil.closePath();
}

function drawPlayer() {
    pencil.beginPath();
    pencil.rect(playerX, playerY, playerSize, playerSize);
    pencil.fillStyle = "maroon";
    pencil.fill();
    pencil.closePath();
}

function render() {
  pencil.clearRect(0, 0, canvasWidth, canvasHeight);
  drawTunnels();
  drawPlayer();
}
setInterval(render, 10);
