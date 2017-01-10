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
  pencil.fillStyle = '#000';
  pencil.fill();
  pencil.closePath();
}

function render() {
  drawTunnels();
}

setInterval(render, 10);


