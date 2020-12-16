class Paper{
    constructor(x, y,radius){

        var options={
            isStatic:false,
            'restitution':0.2,
            'friction':0.3,
            'density':1.0
        }
        this.radius = radius
        this.width=width
        this.height=height
        this.body=Bodies.circle(this.x,this. y, this.radius/2, options);
       World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
       fill("yellow");
       ellipseMode(RADIUS);
       ellipse(40,40,this.radius,this.radius);
       pop();
    }
}