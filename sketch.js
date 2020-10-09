var fixedRect;
var movingRect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400, 300, 80, 30);
 movingRect.shapeColor = "green";

 ob1=createSprite(100,100,50,50);
 ob2=createSprite(200,100,50,50);
 ob3=createSprite(300,100,50,50);
 ob4=createSprite(400,100,50,50);

 ob1.shapeColor="red";
 ob2.shapeColor="red";
 ob3.shapeColor="red";
 ob4.shapeColor="red";

 movingRect.velocityY = -5;
 fixedRect.velocityY = +5;

}

function draw() {
  background(255,255,255);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect,ob1)){
   ob1.shapeColor = "blue";
   movingRect.shapeColor = "blue";
}
else{
  ob1.shapeColor = "green";
   movingRect.shapeColor = "green";
  
}

//bounceOff(movingRect,fixedRect);
  drawSprites();
}

