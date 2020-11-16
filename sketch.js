const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box (700, 360, 50, 50)
    box2 = new Box (752, 360, 50, 50)
    box3 = new Box (804, 360, 50, 50)
    box4 = new Box (856, 360, 50, 50)
    box5 = new Box (908, 360, 50, 50)

    box6 = new Box (752, 310, 50, 50)
    box7 = new Box (804, 310, 50, 50)
    box8 = new Box (856, 310, 50, 50)
    box9 = new Box (908, 310, 50, 50)

    box10 = new Box (804, 360, 50, 50)
    box11 = new Box (856, 360, 50, 50)
    box12 = new Box (908, 360, 50, 50)

    box13 = new Box (856, 310, 50, 50)
    box14 = new Box (908, 310, 50, 50)

    box15 = new Box (908, 260, 50, 50)

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
background(0)
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
     box2.display();
     ground.display();

     box3.display();
     box4.display();
     box5.display();

     box6.display()
     box7.display()
     box8.display()
     box9.display()

     box10.display()
     box11.display()
     box12.display()

     box13.display()
     box14.display()

     box15.display()
   

    bird.display();
    platform.display();
 
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
if(keyCode==32){
    slingshot.attach(bird.body)
}

}