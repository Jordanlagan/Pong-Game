// Initialize

var canvas = document.getElementById('room0');
var width = 640;
var height = 480;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext("2d");

function Paddle(x, y, width = 10, height = 35) {
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height
    this.speed = 5;
}

function Ball(x, y, radius) {
    this.x = x,
    this.y = y,
    this.radius = radius
}

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    context.fillStyle = "#000000";
    context.fill();
}

Paddle.prototype.render = function() {
    context.fillStyle = "#dddddd";
    context.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.move = function(change) {
    this.y += change;
}

function Player() {
    this.paddle = new Paddle(5, 225);
}

function Computer() {
    this.paddle = new Paddle(625, 225);
}

Player.prototype.render = function() {
    this.paddle.render();
}

Player.prototype.update = function() {
    for (var key in keystate) {
        var val = Number(key);
        if (val === 38) {
            if (this.paddle.y >= 5) {
                this.paddle.move(-this.paddle.speed);
            }
        }
        if (val === 40) {
            if (this.paddle.y <= 475) {
                this.paddle.move(this.paddle.speed);
            }
        }
    }
}

Computer.prototype.render = function() {
    this.paddle.render();
}

var player = new Player();
var computer = new Computer();
var ball = new Ball(320, 240, 5);

// Controls

var keystate = {};

window.addEventListener('keydown', function(event) {
    keystate[event.keyCode] = true;
});

window.addEventListener('keyup', function(event) {
    delete keystate[event.keyCode];
});

// Render & Animate

var render = function() {
    context.fillStyle = "#4a4a4A";
    context.fillRect(0, 0, 640, 480);
    player.render();
    computer.render();
    ball.render();
}

var step = function() {
    update();
    render();
    console.log(player.paddle.y);
    animate(step);
}

var update = function() {
    player.update();
}

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

window.onload = function () {
    step();
};
