const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint  = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var engine,world;
var ground;
var ball, rope

function setup() {
  canvas = createCanvas(windowWidth/1.5, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRation = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world,mConstraint);

  ground = new Ground(600, 100, 700, 20);

  pendulum1 = new Pendulum(400, 400, "grey");
  sling1= new Sling(pendulum1.body, { x: 400, y: 110});

  pendulum2 = new Pendulum(500, 400, "grey");
  sling2 = new Sling(pendulum2.body, { x: 500, y: 110});

  pendulum3 = new Pendulum(600, 400, "grey");
  sling3 = new Sling(pendulum3.body, { x: 600, y: 110});

  pendulum4 = new Pendulum(700, 400, "grey");
  sling4 = new Sling(pendulum4.body, { x: 700, y: 110});


}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  

  pendulum1.display();
  sling1.display();
  pendulum2.display();
  sling2.display();
  pendulum3.display();
  sling3.display();
  pendulum4.display();
  sling4.display();
}


function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
  
}


