gameUpdate = function()
{
    console.log("xvel ",myBall.xVel,"yvel ",myBall.yVel);
    requestAnimationFrame(gameUpdate);
    if (collisionCheck_Ball_Square(myBall,mySquare)){
        var dx = myBall.x - mySquare.x-mySquare.w/2
        var dy = myBall.y - mySquare.y-mySquare.w/2
        var width= (myBall.radius*2+mySquare.w)/2; // Distance between the X positions of square and circle center
        var height= (myBall.radius*2+mySquare.h)/2; // Distance between Y positions of same. If dy<height, they are touching
        var crossWidth=width*dy;
        var crossHeight=height*dx;
        var collision='none';
        //console.log("xvel ",myBall.xVel,"yvel ",myBall.yVel);

        //If they are touching
        if(Math.abs(dx)<=width && Math.abs(dy)<=height){
        //IDK whats going on here but it tells which side you bumped into
        if(crossWidth>crossHeight){
            collision=(crossWidth>(-crossHeight))?'bottom':'left';
        }
        else{
            collision=(crossWidth>-(crossHeight))?'right':'top';
        }
        }
        // Manually set the sign for velocity. Not doing so can make the ball jitter in place inside the square.
        // If colliding with the bottom, the ball has to be coming from the bottom, aka Y velocity < 0.
        // If Y velocity was > 0 and hitting the bottom, that would mean it is coming from inside the square, which we don't want.
        // This way, if the ball gets inside the square, it has a quick way of getting back out without pingponging back in.
        //
        // Keep in mind javascripts weird coordinate system where top and left are negative, bottom and right are positive.
        // So a ball going up has a negative Y velocity.
        if (collision==='bottom'){
            if(myBall.yVel<0){
                myBall.yVel=(Math.abs(myBall.yVel));
            }
            //console.log("bottom");
        }
        else if (collision ==='top'){
            if(myBall.yVel>0){
                myBall.yVel=-(Math.abs(myBall.yVel));
            }
            //console.log("top");
        }
        else if(collision==='right'){
            if(myBall.xVel<0){
                myBall.xVel=(Math.abs(myBall.xVel));
            }
            //console.log("right");
        }
        else if(collision==='left'){
            if(myBall.xVel>0){
                myBall.xVel=-(Math.abs(myBall.xVel));
            }
            //console.log("left");
        }

    }


}


frameRender = function() 
{
    // Clear view
    context.clearRect(0, 0, width, height);
    
    // For each object in the ballObjects array...
    for (var i = 0; i < ballObjects.length; i++) {
        
	context.clearRect( 0, 0, width, height );
    context.strokeRect( 0, 0, width, height );
        // Draw a Circle on the canvas to represent the object, based on the object's x, y, width and height
        ballObjects[i].draw(context);
        // Tell the object to update itself for the next frame
        ballObjects[i].nextFrame();
       screenLoop(ballObjects[i]);
    }

    for (var i = 0; i < squareObjects.length; i++) {
        
        // Draw a Circle on the canvas to represent the object, based on the object's x, y, width and height
        context.beginPath();
        context.fillRect(
            squareObjects[i].x, 
            squareObjects[i].y,
            squareObjects[i].w, 
            squareObjects[i].h, 
        );
        context.stroke()
        // Tell the object to update itself for the next frame
        squareObjects[i].nextFrame();
    }

} 
     
frameRenderLoop = function() 
{
    // Use requestAnimationFrame to trigger the 'frameRenderLoop' function as soon as the browser is ready to repaint
    requestAnimationFrame(frameRenderLoop);
        
    // Render the current frame
    frameRender();
}


function screenLoop(ball) {    

    // Drifted off of right edge 
    if ((ball.x + (ball.radius)) >= canvas.width){
        //ball.x = canvas.width - ball.radius;
        ball.xVel = -ball.xVel;
    }
    
    // Drifted off of left edge
    if (ball.x - (ball.radius) <= 0){
       // ball.x = ball.radius;
        ball.xVel = -ball.xVel;
    }
    
    // Drifted off of top edge
    if (ball.y - (ball.radius) <= 0){
//ball.y = ball.radius;
        ball.yVel = -ball.yVel;
    }

    //Here gets the place where the ball moves diagonally or all over the place depending if it goes off screen.
    // Drifted off of bottom edge 
    if (ball.y + (ball.radius) >= canvas.height) {
    	//the x position and y position will have to change.
        //ball.y = canvas.height - ball.radius;
        ball.yVel = -ball.yVel;
    }
}