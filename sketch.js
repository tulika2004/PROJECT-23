var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
var box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 

	//create a box
	box1=new Box(290, 560, 20,200);
	box2=new Box(400, 600, 200,20); 
	box3=new Box(500, 560, 20,200);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  package.display();
  keyPressed();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false); 
	//Matter.Body.setVelocity(package, -5);
}
}



