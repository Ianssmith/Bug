var bubbles = [];

 function setup() {
 createCanvas(windowWidth,windowHeight);
 for(var i = 0; i<5000; i++){
 bubbles[i] = new Bubble();
  }
 }

 function draw() {
 	smooth();
 	frameRate(20);
 	background(15,15,10);
 	for (var i = 0; i<bubbles.length; i++){
  	bubbles[i].display();
  	bubbles[i].bound();
  	bubbles[i].move();
 }

 }



 function Bubble(){
 	this.x = windowWidth/2;//random(0,width);
 	this.y = windowHeight/2;//random(0,height);

 	this.display = function(){
 		stroke(255,255,randomGaussian(255,255), randomGaussian(255,180));
 		fill(20,240,90);
 		line(this.x, this.y, this.x+random(-10,10), this.y);

 	};

 	this.move = function(){
 		this.x += randomGaussian(random(-7,7),2);
 		this.y += randomGaussian(random(-7,7),2);
 	};

 	this.bound = function(){
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
 	};
 };
