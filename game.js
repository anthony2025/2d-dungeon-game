'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

function drawSquare() {
  pencil.beginPath();
  pencil.rect(20, 40, 50, 50);
  pencil.fillStyle = 'black';
  pencil.fill();
  pencil.closePath();
}

function render() {
  drawSquare();
}

setInterval(render, 10);
