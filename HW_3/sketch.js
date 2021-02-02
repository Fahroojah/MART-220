//creates the img variables
var puppy1;
var puppy2;
var puppy3;

//creates the font variables
let myFont;

//creates the counter& timer variable
var counter = 0;
var xspeed = 5;
var yspeed = 5;
var timerValue = 0;


//creates random integer between defined range for the x&y and width and height
var x = getRandomIntX(50,100);
var y = getRandomIntY(50,100);
var w = getRandomIntW(20,100);
var h = getRandomIntH(20,100);

// creates a random integer up to 255 for the color
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);


// set border equal to dimensions of canvas; allows for scaling of the borders
var border = 600

// function to load images and assign them to variables
function preload() {
  puppy1 = loadImage('assets/puppy1.jpg');
  puppy2 = loadImage('assets/puppy2.jpg');
  puppy3 = loadImage('assets/puppy3.jpg');
  myFont = loadFont('assets/Rashkey.otf');
}

function setup() {
  createCanvas(border, border);
  setInterval(timeIt, 1000);
}


//The maximum is exclusive and the minimum is inclusive. Generates random integers
function getRandomIntY(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
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
  // puppies!
    image(puppy1, 10, 10,  border, border/3);
    image(puppy2, 10, 210, border, border/3);
    image(puppy3, 10, 410, border, border/3);
  
  CreateShapes();
  Movement();
  
  
    if(timerValue >5){
    //generate coordinates
     x = getRandomIntX(50,100);
     y = getRandomIntY(50,100);
    //generate size
     w = getRandomIntW(20,100);
     h = getRandomIntH(20,100);
    //generate color
     r = Math.floor(Math.random() * 255);
     g = Math.floor(Math.random() * 255);
     b = Math.floor(Math.random() * 255);
      CreateShapes();
      timerValue=0;
  }
    counter++;
    console.log(x,y,h)
  
//displays the timer
 if (timerValue >=0) {
    text('0:0' +timerValue, width / 1.5, height / 5);
   if (timerValue >=10){
     text('0:' +timerValue, width / 1.5, height / 5);
   }
  } 
 
  
  //draws border boxes
    noStroke();
    fill(200,200,200);
    rect(0,0,border,10);
    rect(0,0,10,border);
    rect(0,border-10,border,10);
    rect(border-10,0,10,border);
  
  //draws signature and names
    fill(255)
    stroke(1)
    textSize(32);
    textFont(myFont);
    text('JF', border-75, border-50);
  
    fill(255)
    stroke(1)
    textSize(20);
    textFont(myFont);
    text(' "rects&circs&dance" ', 25, 50);
  
 
  
}

// creates the timer that counts up
function timeIt() {
  
  if (timerValue >= 0) {
    timerValue++;
  }
}

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
  circle(x*2.25,y*3.5,h*2.25)
}

function Movement()

// I borrowed this from an example
    {
    x += xspeed;
    y += yspeed;
  if (x > (width-150) - 30 || x < 10) {
    xspeed = -xspeed;
  }
  if (y > (height-150) - 30 || y < 10) {
    yspeed = -yspeed;
  }  
  }