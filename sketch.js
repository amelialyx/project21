
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1536, 789);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 var ball_options={
	 isStatic:false,
	 restitution:0.3,
	 friction:0,
	 density:1.2
 }
 ball=Bodies.circle(200,200,20,ball_options);
 World.add(world,ball);
 ground1 =new ground(width/2,670,width,20);
	Engine.run(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
	ground.display();
	background(0);
	drawSprites();
	ellipse(ball.position.x,ball.position.y,20);
}

function hforce(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0});
  }
  
  function vforce(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05});
  }	

