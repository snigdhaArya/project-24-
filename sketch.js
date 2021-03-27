
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600,height,1200,20);
	hammer = new Hammer(10,100);
  rubber = new Rubber(900,450,70);
   stone= new Stone(700,320,100,100);
   iron= new Iron(300,350);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);
  ground.display();
  hammer.display();
  rubber.display();
  stone.display();
    sand.display();
  iron.display();

  drawSprites();
 
}



