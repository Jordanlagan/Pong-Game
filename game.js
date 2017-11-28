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

var player = new Paddle(5, 225);
var computer = new Paddle(625, 225);
var ball = new Ball(320, 240, 5);

// Render

var drawRect = function(object, context) {
    return context.fillRect(object.x, object.y, object.width, object.height);
}

var drawCircle = function(object, context) {
    context.beginPath();
    context.arc(object.x, object.y, object.radius, 0, 2*Math.PI);
    return context.stroke();
}

var render = function() {
    var canvas = document.getElementById("room0");
    var context = canvas.getContext("2d");
    drawRect(player, context);
    drawRect(computer, context);
    drawCircle(ball, context);
}
