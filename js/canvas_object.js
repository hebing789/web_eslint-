function extend(subType, superType) {
    function F() {

    }
    F.prototype = superType.prototype;
    var prototype = new F;
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function Shape(x, y, w, h, b) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.heigth = h;
    this.backgroundColor = b;

    this.draw = function (ctx) {

    };
}
function Line(x, y, w, h, b) {

    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x + w, y + h);
        ctx.strokeStyle = b;
        ctx.lineWidth = 5;
        ctx.stroke();
    };
}
function Circle(x, y, w, h, b) {
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.arc(x, y, w/2, 0, 2 * Math.PI);
        ctx.fillStyle = b;
        ctx.fill();

    };
}
function Rect(x, y, w, h, b) {
    this.draw = function (ctx) {
        ctx.beginPath();
        ctx.rect(x, y, x + w, y + h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";
        ctx.stroke();
        ctx.fillStyle = b;
        ctx.fill();

    };
}
function Star(x, y, w, h, b) {
    this.draw = function (ctx) {
        ctx.lineWidth = 5;
        ctx.beginPath();
        var dit = Math.PI * 4 / 5;
        var sin = Math.sin(0) * w + y;
        var cos = Math.cos(0) * w + x;
        ctx.moveTo(cos, sin);
        for (var i = 0; i < 5; i++) {
            var tempDit = dit * i;
            sin = Math.sin(tempDit) * w + y;
            cos = Math.cos(tempDit) * w + x;
            ctx.lineTo(cos, sin);
        }
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = b;
        ctx.fill();
    };
}


function Pannel(canvasId) {
    var canvasEle = document.getElementById("canvas");
    this.ctx = canvasEle.getContext("2d");
    this.shapeArray = [];
    this.addShape = function (shape) {
        this.shapeArray.push(shape);
        shape.draw(this.ctx);
    };
}

extend(Line, Shape);
extend(Circle, Shape);
extend(Rect, Shape);
extend(Star,Shape);



var pannel = new Pannel('my_canvas');

var line = new Line(100, 100, 800, 30, "#000000");
var circle = new Circle(200, 200, 200, 100, "#ff0000");
var rect = new Rect(300, 300, 600, 100, "gray");
var star=new Star(300, 500, 300,0,"blue");

pannel.addShape(line);
pannel.addShape(circle);
pannel.addShape(rect);
pannel.addShape(star);
