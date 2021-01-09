const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var polygon,polygon_img;
var slingShot;






function setup(){
var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

polygon = Bodies.circle(150,200,20);
    World.add(world,polygon);
    polygon_img=loadImage("polygon.png");


ground1 = new Ground(200,400,5000,30);
ground2 = new Ground(1000,225,210,12);
ground3 = new Ground(500,310,270,12);


slingShot = new Slingshot (this.polygon, {x:250,y:200});


}

function draw(){
    background(56,44,44);
    Engine.update(engine);

 



ground1.display();
ground2.display();
ground3.display();
slingShot.display();


fill("white");
    textSize(24);
    text("Drag the polygon to destroy the blocks",300,30)
    textSize(16);
    text("Press Space to get a second Chance to Play!!", 730,370);


    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);



}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}