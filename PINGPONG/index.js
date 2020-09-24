var canvas = document.querySelector("#canvas");
var c = canvas.getContext("2d");

function fillRect(x, y, w, h, color){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.color = color;

  this.draw = function(){
    c.fillStyle = this.color
    c.fillRect(this.x, this.y, this.w, this.h)
  }
}

let box_arr = Array(2).fill(null).map( v=> v = { x:"",y:"",width:"",height:"" })
let box_a = Array(10).fill(null).map( _ => Array(20).fill(null).map( v =>  v = { shape : "", color:""} )  )
//console.log(box_a);
// console.log(box_arr);
// box_arr[0].x = 1;
// console.log(box_arr[0].X);

var topPressed1 = false;
var btmPressed1 = false;
var topPressed2 = false;
var btmPressed2 = false;

document.addEventListener("keydown", keyDownHandler1);
document.addEventListener("keyup", keyUpHandler1);
document.addEventListener("keydown", keyDownHandler2);
document.addEventListener("keyup", keyUpHandler2);

function keyDownHandler1(e) {
  if(e.keyCode == 87) {
    topPressed1 = true;
  }else if(e.keyCode == 83) {
    btmPressed1 = true;
  }
}

function keyUpHandler1(e) {
  if(e.keyCode == 87) {
    topPressed1 = false;
  }else if(e.keyCode == 83) {
    btmPressed1 = false;
  }
}

function keyDownHandler2(e) {
  if(e.keyCode == 38) {
    topPressed2 = true;
  }else if(e.keyCode == 40) {
    btmPressed2 = true;
  }
}

function keyUpHandler2(e) {
  if(e.keyCode == 38) {
    topPressed2 = false;
  }else if(e.keyCode == 40) {
    btmPressed2 = false;
  }
}


function drawRect1(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  box_arr[0].x = x;
  box_arr[0].y = y;
  box_arr[0].width = w;
  box_arr[0].height = h;  
  this.draw = function() {
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(this.x, this.y, this.w, this.h)
    c.closePath();
  }

  this.update = function() {

    if(topPressed1 && this.y) {
        this.y -= 7;
    }else if(btmPressed1) {
        this.y += 7;
    }
    box_arr[0].y = this.y;

    this.draw();
  }
}

function drawRect2(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  box_arr[1].x = x;
  box_arr[1].y = y;
  box_arr[1].width = w;
  box_arr[1].height = h;  
  this.draw = function() {
    c.beginPath();
    c.fillStyle = color;
    c.fillRect(this.x, this.y, this.w, this.h)
    c.closePath();
  }

  this.update = function() {

    if(topPressed2 && this.y) {
        this.y -= 7;
    }else if(btmPressed2) {
        this.y += 7;
    }
    box_arr[1].y = this.y;

    this.draw();
  }
}

function fillCircle(x, y, dx, dy,radius){
  this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){
		c.beginPath();
		var ball = c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.stroke();
    c.fillStyle = "white"
		c.fill();
  	}
	this.update = function(){
    this.x += this.dx;
		this.y += this.dy;
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy
		}

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      location.reload()
    }
    console.log(box_arr[0].y , this.y + this.radius)
    if( this.y + this.radius >= box_arr[0].y ) console.log("#1");
    if(this.x + this.radius+this.dx  < box_arr[0].x + box_arr[0].width && box_arr[0].y <= this.y+this.radius &&  box_arr[0].y+box_arr[0].height >= this.y ){
      this.dx = -this.dx 
    }

    if(this.x + this.radius+this.dx  > box_arr[1].x + box_arr[1].width && box_arr[1].y <= this.y+this.radius &&  box_arr[1].y+box_arr[1].height >= this.y ){
      this.dx = -this.dx 
    }
   

		this.draw();
	}
}


function drawText(text, x, y, color){
  this.text = text;
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function(){
    c.fillStyle = color;
    c.font = "45px fantasy";
    c.fillText(this.text, this.x, this.y)
  }
}

fillrect = new fillRect(0, 0, canvas.width, canvas.height, "black")

var radius = 5;
var x = canvas.width/2
var y = canvas.height/2
var dx = (Math.random() - 1) * 10;
var dy = (Math.random() - 1) * 10;

fillcircle = new fillCircle(x, y, dx, dy, radius);

drawrect1 = new drawRect1(0, canvas.height/2 - 100/2, 10, 100,"white")
drawrect2 = new drawRect2(canvas.width-10, canvas.height/2 - 100/2, 10, 100,"white")
function init(){
  fillrect.draw();
  fillcircle.update();
  drawrect1.update();
  drawrect2.update();

}

function game(){
  init();
}

setInterval(game, 1000/50)
