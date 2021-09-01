
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;


var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1= new Roof(400,10,400,20);
	bobObject1= new Bob(300,300);
	bobObject2= new Bob(350,300);
	bobObject3=new Bob(400,300);
	bobObject4= new Bob(450,300);
	bobObject5 = new Bob(500,300);

	rope1= new Rope(bobObject1.body,roof1.body,-100,0);
	rope2= new Rope(bobObject2.body,roof1.body,-50,0);
	rope3= new Rope(bobObject3.body,roof1.body,0,0);
	rope4= new Rope(bobObject4.body,roof1.body,50,0);
	rope5= new Rope(bobObject5.body,roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  
  background("skyblue");
  roof1.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
	}
}