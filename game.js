// Initialize

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

var canvas = document.getElementById("room0");
var context = canvas.getContext("2d");

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    context.fill();
}

Paddle.prototype.render = function() {
    context.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.move = function(change) {
    this.y += change;
}

Paddle.prototype.update = function() {
    for (var key in keystate) {
        var val = Number(key);
        if (val === 38) {
            if (player.y >= 5) {
                player.move(-player.speed);
            }
        }
        if (val === 40) {
            if (player.y <= 475) {
                player.move(player.speed);
            }
        }
    }
}

var player = new Paddle(5, 225);
var computer = new Paddle(625, 225);
var ball = new Ball(320, 240, 5);

// Controls

var keystate = {};

window.addEventListener('keydown', function(event) {
    keystate[event.keyCode] = true;
});

window.addEventListener('keyup', function(event) {
    delete keystate[event.keyCode];
});

// Render

var render = function() {
    player.render();
    computer.render();
    ball.render();
}

// Animate
var update = function() {
    player.update();
}

var step = function() {
    update();
    render();
    console.log(player.y);
    animate(step);
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
