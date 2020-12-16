
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;

var engine,world,paper,dustbin;

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	

	paper=new Paper(200,400,10);
	ground = Bodies.rectangle(400,height,800,10);


	
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

paper.display();




  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



