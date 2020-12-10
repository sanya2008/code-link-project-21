var bullet
var wall
var speed
var weight
var thickness

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor="white"
  bullet.velocityX=speed

  wall=createSprite(1200,200,thickness,200)
  wall.shapeColor="white"
}

function draw() {
  background("grey");  
  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight* speed* speed/(thickness* thickness*thickness );
  
    if(damage>10){
      wall.shapeColor="green"
    }
    if(damage<10){
      wall.shapeColor="red"
    }
  }

  

} 


