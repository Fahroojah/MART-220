// Hey Michael! I got a little carried away with random numbers so this is probably more obtusethan it needs to be.

var x = getRandomIntX(50,100);
var y = getRandomIntY(50,100);
var w = getRandomIntW(20,100);
var h = getRandomIntH(20,100);

var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
function setup() {
  createCanvas(400, 400);
}

function getRandomIntY(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntX(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomIntW(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandomIntH(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function draw() {
  background(150);
    CreateShapes();
    noStroke();
    fill(200,200,200);
    rect(0,0,400,10);
    rect(0,0,10,400);
    rect(0,390,400,10);
    rect(390,0,10,400);
  
  fill(255)
  stroke(1)
  textSize(32);
  textFont('Helvetica');
  text('JF', 325, 350);
  
  fill(255)
  stroke(1)
  textSize(20);
  textFont('Helvetica');
  text(' "rects&circs" ', 25, 50);
}

textSize(32);
text('word', 110, 130);

function CreateShapes()
{
  //draw rects
  strokeWeight(2);
  stroke(r+20,g+20,b+20);
  fill(r, g, b);
  rect(x*2,y*1.5,w,h*2);
  rect(x*1.5,y,w,h);
  rect(x*2.5,y,w,h*2);
  rect(x*3,y,w*1.25,h);
  rect(x*1.25,y*2,w,h*1.5);
  
  //draw circles
  fill(r*2, g*1.25, b*1.25);
  circle(x,y,h);
  circle(x*1.5,y*1.5,h*1.5);
  circle(x*1.75,y*1.75,h*1.75)
  circle(x*2,y*2.5,h*2)
  circle(x*2.25,y,h*2.25)
  
}

