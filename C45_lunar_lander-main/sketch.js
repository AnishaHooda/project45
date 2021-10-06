let ground;
let lander;
var lander_img;
var bg_img;
var tile;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(80);

  p1 = createSprite(width/2,height-100,50,50);
  tileGroup = new Group();



  
}

function draw() 
{
  background(51);
  tiles();
  
  if(keyIsDown(LEFT_ARROW)){
    p1.x = p1.x-10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    p1.x = p1.x+10;
  }
  if(p1.isTouching(tileGroup)){
    p1.velocityY = -10;

  }
  if(keyDown("space")){
    p1.velocityY=-10;
  }
  p1.velocityY = p1.velocityY+0.8;
  
  drawSprites();
}

function tiles (){
  if(frameCount%80 === 0){
    tile = createSprite(width/2,20,80,20);
  tile.x = Math.round(random(width/2-250,width/2+250));
  tile.velocityY = 3;
  tileGroup.add(tile);
  }
  
  
}

