'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tunnelWidth = 100;

const playerX = 250;
const playerY = 50;
const playerSize = 25;

$(document).keypress(function(key) {
  if(key.which === 37) {
    playerX += 5; // LEFT
  }
  if(key.which === 39) {
    playerX -= 5; // RIGHT
  }
  if(key.which === 38) {
    playerY += 5; // UP
  }
  if(key.which === 40) {
    playerY -= 5; // DOWN
  }
});


// rect( x , y , width , height)
// VER pencil.rect(200, 700, tunnelWidth, 200);
// HOR pencil.rect(200, 700, 200, tunnelWidth);

function drawTunnels() {
  pencil.beginPath();

  pencil.rect(200, 0, tunnelWidth, 400);
  pencil.rect(200, 300, 200, tunnelWidth);
  pencil.rect(400, 200, tunnelWidth, 200);
  pencil.rect(400, 200, 250, tunnelWidth);

  pencil.rect(200, 0, 900, tunnelWidth);
  pencil.rect(650, 200, tunnelWidth, 350);
  pencil.rect(1050, 0, tunnelWidth, 550);
  pencil.rect(800, 450, 400, tunnelWidth);

  pencil.rect(500, 550, 400, tunnelWidth);

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


