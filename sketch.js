var balloon;
var backImg,balloonImg;
var database;

function preload(){
backImg=loadImage("pro-C35 images/Hot Air Ballon-01.png")
balloonImg=loadAnimation("pro-C35 images/Hot Air Ballon-02.png,Hot Air Ballon-03.png, Hot Air Ballon-04.png ")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  balloon=createSprite(400, 200, 50, 50);
  balloon=addAnimation("running",balloonImg);

  var balloonPosition = database.ref('balloon/position');
  balloonPosition.on("value", readPosition, showError);
}

function draw() {
  background(backImg);  
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }
  drawSprites();
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}