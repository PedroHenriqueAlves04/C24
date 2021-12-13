const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1,stone1,iron1,plane1,rubber1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane1 = new Plane(600,height,1200,20)
    hammer1 = new Hammer(10,100);
    stone1 = new Stone(20,50);
    iron1 = new Iron(40,30);
    rubber1 = new Rubber(200,200,40);
    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane1.display();
    hammer1.display();
    stone1.display();
    iron1.display();
    rubber1.display();
    
 
}