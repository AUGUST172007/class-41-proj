class Drop{
constructor(x,y){
    var options = {
        'restitution':0.1,
        'friction':0.1,
        'density':1.0
    }  
this.body = Bodies.circle(x,y,5)
this.radius = 5;
World.add(world,this.body)

}






update(){
if(this.body.position.y > 800){

matter.Body.setPosition(this.body,{
x : random(0,400),
y : random(0,400)

  })
 }
}
display(){
    var pos =this.body.position;
    
      ellipseMode(CENTER);
      fill("blue");
  ellipse(pos.x,pos.y,this.radius,this.radius)
  
  
}




}











