const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var score=0;

function preload(){
getBackgroundImg();
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  holder1 = new Holder(390,300,250,10);
  holder2 = new Holder(700,200,200,10);

 block1 = new Block(300,275,30,40);
 block2 = new Block(330,275,30,40);
 block3 = new Block(360,275,30,40);
 block4 = new Block(390,275,30,40);
 block5 = new Block(420,275,30,40);
 block6 = new Block(450,275,30,40);
 block7 = new Block(480,275,30,40);
 block8 = new Block(330,235,30,40);
 block9 = new Block(360,235,30,40);
 block10 = new Block(390,235,30,40);
 block11 = new Block(420,235,30,40);
 block12 = new Block(450,235,30,40);
 block13 = new Block(360,195,30,40);
 block14 = new Block(390,195,30,40);
 block15 = new Block(420,195,30,40);
 block16 = new Block(390,155,30,40);
 blocks1 = new Block(640,175,30,40);
 blocks2 = new Block(670,175,30,40);
 blocks3 = new Block(700,175,30,40);
 blocks4 = new Block(730,175,30,40);
 blocks5 = new Block(760,175,30,40);
 blocks6 = new Block(670,135,30,40);
 blocks7 = new Block(700,135,30,40);
 blocks8 = new Block(730,135,30,40);
 blocks9 = new Block(700,95,30,40);
 ball= new Ball(50,200,20);
  sling = new SlingShot(ball.body,{x:100,y:200});


}
function draw() {
  if(backgroundImg)
        background(backgroundImg);

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  ground.display();
  holder1.display();
  holder2.display();
  fill("skyblue");
  block1.display();
  block1.score();
 
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("turquoise");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
ball.display();
sling.display();
textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX ,y :mouseY});
}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "nighttime.jpg";
  }
  else{
      bg = "daytime.jpeg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}