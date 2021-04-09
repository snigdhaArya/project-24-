
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,rubber,stone,iron,sand,sand2,sand3,sand4,sand5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600,height,1200,20);
	hammer = new Hammer(10,100);
  rubber = new Rubber(900,450,70);
   stone= new Stone(700,320,100,100);
   iron= new Iron(300,350);
   sand= new Sand(600,340,10);
   sand2= new Sand(580,340,10);
   sand3= new Sand(560,340,10);
   sand4= new Sand(540,340,10);
   sand5= new Sand(520,340,10);



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
    sand2.display();  
    sand3.display();
    sand5.display();
    sand4.display();
  iron.display();

  drawSprites();
 
}



