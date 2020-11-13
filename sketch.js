var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX= -3;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1 = createSprite(300,400,80,30);
  ball1.velocityX= 3;
  ball1.shapeColor = "green";
  ball1.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
 if(isTouching(movingRect, fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green"
}

bounceOff(fixedRect, ball1);

drawSprites();
}

