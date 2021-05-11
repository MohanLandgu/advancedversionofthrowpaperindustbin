
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BALL;
var dust;
var dust1;
var dudt2;
var GROUND;
var Slingshot;

var bin
var binImage
function preload()
{
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bin=createSprite(650,440,20,20)
bin.addImage(binImage);
bin.scale=0.45;

	BALL=new Ball(50,495,10);
	BALL.scale=0.1

	dust=new Dustbin(650,500,100,10,option);
	dust.scale=0.1
    
	dust1=new Dustbin(600,465,10,100,option);
    dust2=new Dustbin(700,465,10,100,option);

	GROUND=new Ground(width/2,510,1000,10,option);

	Slingshot =  new SlingShot(BALL.body,{x:100,y:300})

	var option={

isStatic:true


	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
BALL.display();
dust.display();
dust1.display();
dust2.display();
GROUND.display();
Slingshot.display();




  drawSprites();


}

function mouseDragged(){
    Matter.Body.setPosition(BALL.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}





function keyPressed(){


	if(keyCode=== UP_ARROW){
	
	
	Matter.Body.applyForce(BALL.body,BALL.body.position,{
	
	x:12,
	y:-14
	
	
	 })
	}
   }
 
