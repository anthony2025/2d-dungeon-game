'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tunnelWidth = 100;

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

  pencil.fillStyle = '#000';
  pencil.fill();
  pencil.closePath();
}

function render() {
  drawTunnels();
}

setInterval(render, 10);


