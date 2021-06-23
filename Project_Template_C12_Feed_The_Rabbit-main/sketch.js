var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityX = -3;
garden.scale=2;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(255);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (garden.x < 0){
    garden.x = garden.width/2;
  }
   Spawn();
  drawSprites();
}

function Spawn(){
  
  if (frameCount%80==0){
  var select_sprites=Math.round(random(1,2));
  if (select_sprites==1){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.velocityY = 3;
    apple.lifetime = 125;
    apple.scale=0.1;
  leaf = createSprite(random((50,350),40,10,10));
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.lifetime = 125;
  leaf.scale=0.1;  
}
  
  }

}
 




