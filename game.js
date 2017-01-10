'use strict';

const canvas = document.getElementById('gameCanvas');
const pencil = canvas.getContext('2d');

let x = 100;
let y = 100;
let speedx = 1;
let speedy = 1;

function drawSquare() {
  pencil.beginPath();
  pencil.rect(20, 40, 50, 50);
  pencil.fillStyle = 'red';
  pencil.fill();
  pencil.strokeStyle = 'black';
  pencil.stroke();
  pencil.closePath();
}

function render() {
  drawSquare();
}
setInterval(render, 10);
