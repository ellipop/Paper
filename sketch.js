
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var wall1, wall2;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.40,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wall_opt ={
	isStatic: true
  };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  wall1 = Bodies.rectangle(270,380,20,100,wall_opt);
  World.add(world,wall1);

  wall2 = Bodies.rectangle(200,380,400,20,wall_opt);
  World.add(world,wall2);


  ball = Bodies.circle(20,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("white");
  

  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  rect(wall1.position.x,wall1.position.y,10,100);
  rect(wall2.position.x,wall2.position.y,10,100);
 

  if (keyDown(RIGHT_ARROW)){
    Matter.Body.applyForce(ball, {x:0,y:0},{x:0.01,y:-0.01})
  }
}




