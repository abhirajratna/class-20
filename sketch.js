var fixedRectangle,movingRectangle;

function setup() {
  createCanvas(1200,800);
 fixedRectangle = createSprite(200,200,50,80);
 movingRectangle = createSprite(400,200,80,30);

 fixedRectangle.shapeColor = "green";
 movingRectangle.shapeColor = "green";

 fixedRectangle.debug = true;
 movingRectangle.debug = true;


}

function draw() {
  background(0,255,255);  

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && 
    fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
    fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
    movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 ){
    movingRectangle.shapeColor = "red";
    fixedRectangle.shapeColor = "red";
  } 
else{
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";
}
  drawSprites();
}