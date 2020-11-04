class Bob{

    constructor(x,y,r){

        var options ={

            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2



        }

        this.bob = Bodies.circle(x,y,r,options);
        this.r = r
        World.add(world,this.bob);




    }

    display(){

        var bobPos = this.bob.position;
        push();

        translate(bobPos.x,bobPos.y);
        ellipseMode(RADIUS);
        fill("pink");

        ellipse(0,0,this.r,this.r);

        pop();



    }





}