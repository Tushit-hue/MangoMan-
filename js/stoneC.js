class StoneCost{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.stoneC = Constraint.create(options);
        World.add(world, this.stoneC);
    }
    attach(bodyA){
        this.stoneC.bodyA = bodyA
    }
    fly(){
        this.stoneC.bodyA = null;
    }
    display(){
        if(this.stoneC.bodyA){
        strokeWeight(5)
        line(this.stoneC.bodyA.position.x,this.stoneC.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
}