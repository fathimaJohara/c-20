var movrect,fixrect

function setup() {
  createCanvas(800,400);
 movrect= createSprite(400, 200, 50, 50);
 movrect.shapeColor="red"
 fixrect=createSprite(400,300,50,50)
 fixrect.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  movrect.x=mouseX
  movrect.y=mouseY
  if(movrect.x-fixrect.x<fixrect.width/2+movrect.width/2
    &&fixrect.x-movrect.x<movrect.width/2+fixrect.width/2
    &&movrect.y-fixrect.y<fixrect.height/2+movrect.height/2
    &&fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
    movrect.shapeColor="blue"
    fixrect.shapeColor="blue"
  }
  else{
    movrect.shapeColor="red"
    fixrect.shapeColor="yellow"
  }
  drawSprites();
}