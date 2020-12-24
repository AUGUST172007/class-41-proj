const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops;
var umbrella;

var ellipse;
var engine, world;
var drops=[];

function preload(){
    
}

function setup(){
 var canvas = createCanvas(800,800);  

 engine = Engine.create();
 world = engine.world;

 var maxDrops = 100;
 for(var i=0; i<maxDrops; i++){
drops.push(new Drop(random(0,400) , random(0,400)));

 }







}

function draw(){

   Engine.update(engine);  
   background("black");
   for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();

  
}   
drawSprites();
}

