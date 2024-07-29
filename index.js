const canvas = document.querySelector('canvas');
const height = window.innerHeight;
const width = window.innerWidth;
canvas.width = width;
canvas.height = height;

const circle = canvas.getContext('2d');

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }
  draw() {
    circle.beginPath();
    circle.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    circle.stroke();

    circle.fillStyle = this.color;
    circle.fill();

    this.move();
  }
  move() {
    if (this.x > width - this.radius || this.x < 0 + this.radius) {
      this.dx = -this.dx;
    }
    if (this.y > height - this.radius || this.y < 0 + this.radius) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

//random number
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const colors = [
  '#e26a6a',
  '#d2527f',
  '#f22613',
  '#1e824c',
  '#c8f7c5',
  '#a2ded0',
  '#e87e04',
  '#1f3a93',
  '#990000',
  '#45818e',
  '#2986cc',
  '#c27ba0',
  '#16537e',
  '#5b5b5b',
  '#38761d',
  '#674ea7',
  '#013243',
  '#336e7b',
];
const circles = [];

for (let i = 0; i < 3000; i++) {
  let radius = 10;
  let x = Math.random() * (width - radius * 2) + radius;
  let y = Math.random() * (height - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 2;
  let dy = (Math.random() - 0.5) * 2;
  const index = randomInteger(1, colors.length - 1);
  circles.push(new Circle(x, y, dx, dy, radius, colors[index]));
}

function animate() {
  requestAnimationFrame(animate);
  circle.clearRect(0, 0, width, height);

  for (let i = 0; i < circles.length; i++) {
    circles[i].draw();
  }
}

animate();
