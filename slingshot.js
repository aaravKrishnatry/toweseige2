class slingShot{
    constructor(myBody, myPoint){
        var option = {
            bodyA:myBody, 
        pointB :myPoint,
        stiffness:0.04,
        length:1        
        }
        this.sling=Constraint.create (option)
        this.pointB=myPoint
        World.add(world, this.sling)
    }
    fly(){
        this.sling.bodyA =null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
    
}