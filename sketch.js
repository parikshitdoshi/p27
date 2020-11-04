
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,350,100,20);
	bob1 = new Bob(300,400,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  bob1.display();
  ground.display();
  drawSprites();
 
}



