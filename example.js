let x = 100;
let y = 100;
let speedx = 1;
let speedy = 1;

function drawLine() {
  pencil.beginPath();
  pencil.rect(x, y, 25, 25);
  pencil.fillStyle = 'RebeccaPurple';
  pencil.fill();
  pencil.closePath();
  x += speedx;
  y += speedy;
}

function drawSquare() {
  pencil.beginPath();
  pencil.rect(20, 40, 50, 50);
  pencil.fillStyle = 'red';
  pencil.fill();
  pencil.strokeStyle = 'black';
  pencil.stroke();
  pencil.closePath();
}
