const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    rubber = new Rubber(20,100,20);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   rubber.display();
    
 
}