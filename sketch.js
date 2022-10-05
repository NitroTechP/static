var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,307,56,64)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.3
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
drawSprites()
  if (keyDown("space"))  { 
    ghost.velocityY = -3
  }
ghost.velocityY = ghost.velocityY + 0.67
  if (keyDown("right_arrow"))  { 
    ghost.x = ghost.x + 5
  }





  
}
