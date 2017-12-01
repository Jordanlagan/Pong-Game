// Initialize

function Paddle(x, y, width = 10, height = 35) {
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height
}

function Ball(x, y, radius) {
    this.x = x,
    this.y = y,
    this.radius = radius
}

var canvas = document.getElementById("room0");
var context = canvas.getContext("2d");

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    context.stroke();
}

Paddle.prototype.render = function() {
    context.fillRect(this.x, this.y, this.width, this.height);
}

var player = new Paddle(5, 225);
var computer = new Paddle(625, 225);
var ball = new Ball(320, 240, 5);

// Render

var render = function() {
    player.render();
    computer.render();
    ball.render();
}

// Animate
var step = function() {
    render();
}

var animate = window.requestAnimationFrame || function(step) { window.setTimeout(step, 1000/60) };
