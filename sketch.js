
var bubbles = [];

//actual literal object: with methods

function setup(){
	createCanvas(windowWidth,windowHeight);
	for(var i = 0; i<5000; i++){
		bubbles[i] =  {
		x: (windowWidth/6)*2,
		y: (windowHeight/10)*7.5,
		display: function(){
			stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
			fill(20,240,90);
			line(this.x, this.y, this.x+random(-10,10), this.y);
		},
		move: function(){
			this.x += randomGaussian(random(-7,7),2);
			this.y += randomGaussian(random(-7,7),2);
		},
		bound: function(){
			if (this.x >= windowWidth-40)  {
				this.x -= 40;
			}else if (this.x <= 40){
				this.x += 40;
			}
			if (this.y >= windowHeight-40){
				this.y -= 40;
			} else if (this.y <= 40){
				this.y += 40;
			}
		},
	}
}
}

//actual literal object with methods ^^^

function draw(){
	smooth();
	//frameRate(20);
	background(15,15,10);
	for (var i = 0; i<bubbles.length; i++){
 		bubbles[i].display();
 		bubbles[i].bound();
 		bubbles[i].move();
 	}
}




// for(var i = 0; i<1000; i++){
// bubblesC[i] = new bubbles {
// 	x: (windowWidth/6)*2,
// 	y: (windowHeight/10)*7.5,
// 	display: function(){
// 		stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
// 		fill(20,240,90);
// 		line(this.x, this.y, this.x+random(-10,10), this.y);
	
// 	},
// 	move: function(){
// 	this.x += randomGaussian(random(-7,7),2);
// 	this.y += randomGaussian(random(-7,7),2);
// 	},
// 	bound: function(){
// 		if (this.x >= windowWidth-40)  {
// 			this.x -= 40;
// 		}else if (this.x <= 40){
// 			this.x += 40;
// 		}
// 		if (this.y >= windowHeight-40){
// 			this.y -= 40;
// 		} else if (this.y <= 40){
// 			this.y += 40;
// 		}
// 	},
// }
// }

// for(var i = 0; i<1000; i++){
// bubblesB[i] = {
// 	x: (windowWidth/6)*3,
// 	y: (windowHeight/10)*7,
// 	display: function(){
// 		stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
// 		fill(20,240,90);
// 		line(this.x, this.y, this.x+random(-10,10), this.y);
	
// 	},
// 	move: function(){
// 	this.x += randomGaussian(random(-7,7),2);
// 	this.y += randomGaussian(random(-7,7),2);
// 	},
// 	bound: function(){
// 		if (this.x >= windowWidth-40)  {
// 			this.x -= 40;
// 		}else if (this.x <= 40){
// 			this.x += 40;
// 		}
// 		if (this.y >= windowHeight-40){
// 			this.y -= 40;
// 		} else if (this.y <= 40){
// 			this.y += 40;
// 		}
// 	},
// }
// }

// for(var i = 0; i<1000; i++){
// bubblesA[i] = {
// 	x: (windowWidth/6)*4,
// 	y: (windowHeight/10)*6.5,
// 	display: function(){
		
// 		stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
// 		fill(20,240,90);
// 		line(this.x, this.y, this.x+random(-10,10), this.y);
	
// 	},
// 	move: function(){
// 	this.x += randomGaussian(random(-7,7),2);
// 	this.y += randomGaussian(random(-7,7),2);
// 	},
// 	bound: function(){
// 		if (this.x >= windowWidth-40)  {
// 			this.x -= 40;
// 		}else if (this.x <= 40){
// 			this.x += 40;
// 		}
// 		if (this.y >= windowHeight-40){
// 			this.y -= 40;
// 		} else if (this.y <= 40){
// 			this.y += 40;
// 		}
// 	},
// }
// }

// for(var i = 0; i<1000; i++){
// bubblesD[i] = {
// 	x: (windowWidth/6)*5,
// 	y: (windowHeight/10)*6,
// 	display: function(){
// 		stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
// 		fill(20,240,90);
// 		line(this.x, this.y, this.x+random(-10,10), this.y);
	
// 	},
// 	move: function(){
// 	this.x += randomGaussian(random(-7,7),2);
// 	this.y += randomGaussian(random(-7,7),2);
// 	},
// 	bound: function(){
// 		if (this.x >= windowWidth-40)  {
// 			this.x -= 40;
// 		}else if (this.x <= 40){
// 			this.x += 40;
// 		}
// 		if (this.y >= windowHeight-40){
// 			this.y -= 40;
// 		} else if (this.y <= 40){
// 			this.y += 40;
// 		}
// 	},
// }


// }

// for (var i = 0; i<bubblesD.length; i++){
//  	bubblesD[i].display();
//  	bubblesD[i].bound();
//  	bubblesD[i].move();
//  	}

 	// for (var i = 0; i<bubblesB.length; i++){
 	// bubblesB[i].display();
 	// bubblesB[i].bound();
 	// bubblesB[i].move();
 	// }

 	// for (var i = 0; i<bubblesC.length; i++){
 	// bubblesC[i].display();
 	// bubblesC[i].bound();
 	// bubblesC[i].move();
 	// }

 	// for (var i = 0; i<bubblesA.length; i++){
 	// bubblesA[i].display();
 	// bubblesA[i].bound();
 	// bubblesA[i].move();
 	// }
 	
 // 	fill(255);

 // 	quad(0,windowHeight/2, windowWidth, windowHeight/6, windowWidth, 0, 0,0);
 // 	fill(180);
 // 	quad(0,windowHeight/2-40, windowWidth, windowHeight/6-40, windowWidth, 0, 0,0);
 // 	fill(50);
 // 	quad(0,windowHeight/2-320, windowWidth, windowHeight/6-320, windowWidth, 0, 0,0);
	// strokeWeight(5);
	// stroke(0);
 // 	line(0,windowHeight/2-320, windowWidth, windowHeight/6-320);

 // 	strokeWeight(30);
 // 	stroke(5,15,5);
 	//line (windowWidth/6, (((windowHeight/6)*2)/5)+23, windowWidth/6,0);
 	//line ((windowWidth/6)*2, (((windowHeight/6)*2)/5)-30, (windowWidth/6)*2,0);
 	//line ((windowWidth/6)*3, (((windowHeight/6)*2)/5), (windowWidth/6)*3,0);
 	//line ((windowWidth/6)*4, (((windowHeight/6)*2)/5)*4, (windowWidth/6)*4,0);
 	//line ((windowWidth/6)*5, (((windowHeight/6)*2)/5)*3.25, (windowWidth/6)*5,0);


