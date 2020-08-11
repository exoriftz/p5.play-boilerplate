
var car;
var wall;
var score=0;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  score=0;;
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);

  car.velocityX=speed;
  wall.x-car.x < car.width+wall.width/2;

  car.velocityX=speed;
   var deformation=0.5*weight*speed*speed/22500;

  
if(deformation<100){
  car.color=color(0,255,0);
}

if (deformation<180 && deformation>100){
   car.shapeColor=color(230,230,0);
}

if(deformation>180){
  car.color=color(230,230,0);
}

  drawSprites();
}