class link {
    constructor(bodyA,bodyB){
        var options ={
            bodyA : bird.body, 
            bodyB : train.body,
            stiffness : 0.04,
            length : 10
        }
        this.link = Constraint.create(options);
        World.add(world,this.link);
    }
    display(){
        strokeWeight(4);
        var pointA = this.link.bodyA.position;
        var pointB = this.link.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}