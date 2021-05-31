class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly()
    {
        this.launcher.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;

            if(pointA.x<220)
            {
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }

            else
            {
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-3); 
            }
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
