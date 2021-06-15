var pathImg,path;
var boy,boyImg
var invisibleboundry1,invisibleboundry2


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
boyImg=loadImage("runner-1.png","runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200,20,20)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2
boy=createSprite(300,300,20,20)
boy.addAnimation("running",boyImg)
boy.scale=0.1
invisibleboundry1=createSprite(360,400,15,900)
invisibleboundry2=createSprite(235,400,15,900)
invisibleboundry1.visible=true;
invisibleboundry2.visible=true


}
function draw() {
  background(0);
  
  if (path.y> 400){
    path.y = path.height/4;
    boy.collide(invisibleboundry1)  
   boy.collide(invisibleboundry2)  
}
if(keyDown("left")){
  boy.x-=5;
}
if(keyDown("right")){
  boy.x+=5;
}

  


  
drawSprites();
}
