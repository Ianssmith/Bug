//var nums = [];
var x;
var y;
var cnv;
var marg = 50;
var xoff=0;
var xoff2=10000;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

function draw() {

  background(0);
//for(var j = 0; j<100;j++){
  //  avoid();
  for (var i = 0; i < 4200; i++) {
    move();
    display();
    bound();
  }

//}
}
function display() {
  stroke(42, randomGaussian(255, 255), 42, randomGaussian(255, 180));
  fill(20, 240, 90);
  line(x, y, x + random(-10, 10), y);

}

function move() {
	//x += noise(xoff);
	//y += noise(xoff2);
  x += randomGaussian(random(-7,7), noise(xoff));
  y += randomGaussian(random(-7,7), noise(xoff2));
  //x += map(noise(xoff),0,1,0, randomGaussian(random(-7, 7), 2));
  //y += map(noise(xoff),0,1,0, randomGaussian(random(-7, 7), 2));
  //x += map(noise(xoff),0,1,0, randomGaussian(random(-7, 7), 2));
  //y += map(noise(xoff),0,1,0, randomGaussian(random(-7, 7), 2));
	xoff += randomGaussian(random(-7,7), 2);
	xoff2 += randomGaussian(random(-7,7), 2);
  //map(noise(xoff),0,1,0,7)
}

function bound(){
			if (x >= width-40)  {
				x -= 40;
			}else if (x <= 40){
				x += 40;
			}
			if (y >= height-40){
				y -= 40;
			} else if (y <= 40){
				y += 40;
			}
		}

function avoid(){
    if(x >= mouseX-10){
        x+=random(-2,5);
  y += randomGaussian(random(-7, 7), 2);
    }else if(x <= mouseX+10){
        x+=random(-5,2);
  y += randomGaussian(random(-7, 7), 2);
    }else{
  x += randomGaussian(random(-7, 7), 2);
  y += randomGaussian(random(-7, 7), 2);
                  }   
    if(y >= mouseY-10){
  x += randomGaussian(random(-7, 7), 2);
        y+=random(-2,5); 
    }else if(y <= mouseY+10){
  x += randomGaussian(random(-7, 7), 2);
        y+=random(-5,2); 
    }else{
  x += randomGaussian(random(-7, 7), 2);
  y += randomGaussian(random(-7, 7), 2);
                  }   
    
}
