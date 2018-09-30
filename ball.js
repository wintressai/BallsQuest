// A Ball 
var Ball = function(x, y, r) 
{
    // Set the object's x/y position
    this.x = x;
    this.y = y;
    
    // Set the object's width and height
    this.radius = r;
    
    // Initialise the object's x and y velocity with a value of 0 (it's stationary initially)
    this.xVel = 1.5;
    this.yVel = 1.5;
    
    // Adjust the object's x velocity
    this.addXVel = function(vel) { 
        this.xVel += vel;
    };
    
    // Adjust the object's y velocity
    this.addYVel = function(vel) { 
        this.yVel += vel;
    };

    this.draw = function( ctx ){
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
        ctx.fill();
    }
    //draw: function( ctx ) {
      //  ctx.beginPath();
      //  ctx.arc( this.x, this.y, this.radius, 0, 2*Math.PI );
     //   ctx.fill();
    //};

    // Update the object's position for the next frame
    this.nextFrame = function() { 
        this.x += this.xVel;
        this.y += this.yVel;
    }
} 