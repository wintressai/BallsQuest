gameUpdate = function()
{
    requestAnimationFrame(gameUpdate);
    if (collisionCheck_Ball_Square(myBall,mySquare)){
        myBall.xVel=myBall.xVel*(-1);
        myBall.yVel=myBall.yVel*(-1);
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