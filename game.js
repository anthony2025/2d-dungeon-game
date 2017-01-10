'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const tunnelWidth = 100;

// rect( x , y , width , height)

function drawTunnels() {
  pencil.beginPath();
  pencil.rect(200, 0, tunnelWidth, 300);
  pencil.rect(200, 200, 200,tunnelWidth);
  pencil.rect(400, 100, tunnelWidth,200);
  pencil.rect(400, 100, 300,tunnelWidth);
  pencil.rect(600, 100, tunnelWidth,250);
  pencil.fillStyle = '#00000';
  pencil.fill();
  pencil.closePath();
}

function render() {
  drawTunnels();
}
setInterval(render, 10);


