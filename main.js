 //Get the width and height of the window
		var win = window,
   		d = document,
    	e = d.documentElement,
    	g = d.getElementsByTagName('body')[0],
   		width = win.innerWidth || e.clientWidth || g.clientWidth,
    	height = win.innerHeight|| e.clientHeight|| g.clientHeight;
     	var canvas = document.createElement("canvas");
    	canvas.id = "canvas";
    	canvas.width = 320;
    	canvas.height = 568;
    	canvas.border = 1;
    	canvas.style.border='1px solid black';

    	document.body.appendChild(canvas);

    	var context = canvas.getContext("2d");

    	// Array of objects
    	var ballObjects=[];
    	var squareObjects = [];


// Start the render loop

     
// Add an object into the engine at x: 100, y: 100, with a width and height of 20 pixels.
//physicalObjects.push(new PhysicalObject(100, 350, 20, 20));  
// Start the render loop
var myBall =  new Ball(100, 200, 30);   
var mySquare = new Square(200, 200, 30, 30);
ballObjects.push(myBall);
squareObjects.push(mySquare);    

gameUpdate();
frameRenderLoop(); 
// Give it a little push!
//physicalObjects[0].addYVel(1.0);

//NOTE: Keep in mind if you want balls to bounce off the edge, then you should change the xVel and yVel too.