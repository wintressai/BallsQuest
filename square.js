        // A Square
var Square = function(x, y, w, h) 
{
    // Set the object's x/y position
    this.x = x;
    this.y = y;
    
    // Set the object's width and height
    this.w = w;
    this.h = h;
    // Initialise the object's x and y velocity with a value of 0 (it's stationary initially)
    this.xVel = 0.0;
    this.yVel = 0.0;
    
    // Adjust the object's x velocity
    this.addXVel = function(vel) { 
        this.xVel += vel;
    };
    
    // Adjust the object's y velocity
    this.addYVel = function(vel) { 
        this.yVel += vel;
    };
    
    // Update the object's position for the next frame
    this.nextFrame = function() { 
        this.x += this.xVel;
        this.y += this.yVel;
    }
} 
