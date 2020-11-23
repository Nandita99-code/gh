var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car= createSprite(200,100,30,30);
  car.shapeColor="yellow";
  car.velocityX=3;
  wall=createSprite(600,100,20,60);
  wall.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,wall)){
  movingRect.shapeColor="red";
  wall.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  wall.shapeColor="pink";
}
bounceOff(car,wall)
  


  
  drawSprites();
}
