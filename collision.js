collisionCheck_Ball_Square = function(ball, square)
{
    // Distance between center of ball and center of square. 
    // Note square x,y coordinates are at the top left corner
    var distX=Math.abs(ball.x - square.x-square.w/2);
    var distY=Math.abs(ball.y - square.y-square.h/2);
    console.log("distX "+distX);
    console.log (square.w/2);

    if (distX > square.w/2 + ball.radius){
        return false;
    }
    if (distY > square.h/2 + ball.radius){
        return false;
    }

    if (distX <= square.w/2 ){
        return true;
    }
    if (distY <= square.h/2 ){
        return true;
    }
    var dx=distX - square.w/2;
    var dy=distY - square.h/2;
    return (dx*dx+dy*dy<=(ball.radius*ball.radius));

}
