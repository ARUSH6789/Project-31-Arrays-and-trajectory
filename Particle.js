class Particle{
    constructor(x,y){ //properties
        var options = {
            restitution:0.4,
            isStatic : false
            
        }

        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255) , random(0,255) , random(0,255));
        this.radius = 10;

        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
      
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill(this.color)
        ellipse(0,0,this.radius);
        pop()
    }
}