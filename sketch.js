var Dizhe;

function setup() {
  createCanvas(1000,400);
  Dizhe =createSprite(500,200,50,50);
}

function draw() 
{
  background(0);
  if (keyDown("RIGHT_ARROW")){
    background("red");
  }

  //background(0);
  drawSprites();
}




