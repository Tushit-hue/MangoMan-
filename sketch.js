
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,200,40)
	mango3 = new mango(1000,50,30)
	mango4 = new mango(900,250,45)
	mango5 = new mango(1100,250,30)
	mango6 = new mango(1000,180,40)


	
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone = new Stone(240,420,20)

	constraint = new StoneCost(stone.body,{x:240, y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()

  stone.display();	

  constraint.display();


  groundObject.display();


detectcollision(stone,mango1)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)
detectcollision(stone,mango6)
}


function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	
}

function mouseReleased() {
	constraint.fly();
	//Matter.Body.applyForce(stone.body,stone.body.position,{x:23,y:-43})
	
}
function keyPressed() {
	if(keyCode===32)
{
	Body.setPosition(stone.body,{x:220,y:420})
	constraint.attach(stone.body)
}	
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	//console.log(distance)
   // console.log(lmango.r+lstone.r)
		if(distance<=lmango.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
	}

