var slingshot,ground1,ground2,ground3,polygon1,polygon_img;

var box24, box1,box2,box3,box4,box5,box6,box7,box8,box9, 
box25,box10,box11,box12,box13,box14,box23,box15,box16,box17, 
box22,box18,box19,box20,box21;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
  polygon_img = loadImage("polygon.jpg")
  
}

function setup() {
	createCanvas(1200, 700);

  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
 
  ground1= new Ground(600,690,width,30);
  ground2= new Ground(390,300,250,10);
  ground3= new Ground(700,200,200,10);
  

  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);
  //level two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  
//   box1= new Box(895+20,70 );
//   box2= new Box(935+20,70 );
// 	box3= new Box(975+20,70 );
//   box4= new Box(1035,70 ); 
//   box5= new Box(1055+20,70 );
// 	box6= new Box(935+20,50 );
// 	box7= new Box(975+20,50 );
//   box8= new Box(1035,50 );
//   box9= new Box(975+20,30 );
  
//   box10= new Box(485,90 );
//   box11= new Box(525,90 );
//   box12= new Box(565,90 );
//   box13= new Box(605,90 );
//   box14= new Box(645,90 );
//   box15= new Box(685,90 );
//   box16= new Box(725,90 );

//   box17= new Box(525,70 );
//   box18= new Box(565,70 );
//   box19= new Box(605,70 );
//   box20= new Box(645,70 );
//   box21= new Box(685,70 );

//   box22= new Box(565,50 );
//   box23= new Box(605,50 );
//   box24= new Box(645,50 );

//   box25= new Box(605,30 );
  
  
  polygon1 = Bodies.circle(50,200,20);
  
  World.add(world,polygon1);
  slingshot = new SlingShot(this.polygon1,{x:100, y:200});
  
  
  
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(234, 242, 0);
  
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
   block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
//   box13.display();
//   box14.display();
//   box15.display();
//   box16.display();
//   box17.display();
//   box18.display();
//   box19.display();
//   box20.display();
//   box21.display();
//   box22.display();
//   box23.display();
//   box24.display();
//   box25.display();

  imageMode(CENTER)
  image(polygon_img,polygon1.position.x,polygon1.position.y,40,40);
  slingshot.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
      console.log ("pressed space key");
      slingshot.attach(this.polygon1);
  }
  }
  

function mouseDragged(){
    Matter.Body.setPosition(polygon1, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

