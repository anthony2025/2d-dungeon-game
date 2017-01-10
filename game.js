'use strict';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;

function drawRedSquare() {
  ctx.beginPath();
  ctx.rect(20, 40, 50, 50);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function drawGreenCircle() {
  ctx.beginPath();
  ctx.arc(240, 160, 20, 0, Math.PI*2, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.closePath();
}

function drawEmptyRectangle() {
  ctx.beginPath();
  ctx.rect(160, 10, 100, 40);
  ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
  ctx.stroke();
  ctx.closePath();
}

function hhh() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}

function draw() {
    drawRedSquare();
    drawGreenCircle();
    drawEmptyRectangle();
    hhh();
}

setInterval(draw, 10);
