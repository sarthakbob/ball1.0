var ball1;
var ball2;
var ball3;
var ball4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ball1 = 200,200,20,20;
	ball2 = 210,200,20,20;	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120, 245, 66);
  

  drawSprites();
 
}

ball1;
ball2;

