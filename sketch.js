
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();  
  holder = new Holder();
  ball = new Ball(200,300,30);
  ball2 = new Ball(260,300,30);
  ball3 = new Ball(320,300,30);
  ball4 = new Ball(380,300,30);
  ball5 = new Ball(440,300,30);
  ball6 = new Ball(500,300,30);



  connector = new Connector({x:200,y:100},ball.body);
  connector2 = new Connector({x:260,y:100},ball2.body);
  connector3 = new Connector({x:320,y:100},ball3.body);
  connector4 = new Connector({x:380,y:100},ball4.body);
  connector5 = new Connector({x:440,y:100},ball5.body);
  connector6 = new Connector({x:500,y:100},ball6.body);
}


function draw() {
  background("black"); 
  Engine.update(engine);

  textSize(17);
  fill("lightyellow")
  text("Drag mouse to oscillate the pendulum to left and right with mouse",150,30);
  text("Press Enter to stop the Pendulum from oscillating",215,60);

  ground.display();
  holder.display();
  ball.display();
  ball2.display();
  ball3.display();
  connector.display();
  connector2.display();
  connector3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  connector4.display();
  connector5.display();
  connector6.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //Matter.Body.setPosition(ball2.body, {x: mouseX -60, y: mouseY});
 // Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
 //Matter.Body.setPosition(ball4.body, {x: mouseX+60 , y: mouseY});
 //Matter.Body.setPosition(ball5.body, {x: mouseX+120 , y: mouseY});
 //Matter.Body.setPosition(ball6.body, {x: mouseX+180 , y: mouseY});
 // Matter.Body.setStatic(ball.body, false);
  //Matter.Body.setStatic(ball2.body, false);
 // Matter.Body.setStatic(ball3.body, false);
}
function keyPressed(){

  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:-55,y:-35});
    
  
  }
  
}



   




