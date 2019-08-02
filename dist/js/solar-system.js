 	

let cam;
let P;

let image;
let bgImage;

function preload() {  
  image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Sun.jpg");
  bgImage = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/stars.jpg");
}

function setup() {
    cam = new Dw.EasyCam(this.WEBGL, 100);
    createCanvas(windowWidth,windowHeight, WEBGL); 
    
    P = new Star(75,7, image);  
}
  
function draw() { 
    background(0);
       
    pointLight(255, 255, 255, -50, -50, 200);
    pointLight(255, 255, 255, 50, -50, 200);
    pointLight(255, 255, 255, 50, 50, 200);
    pointLight(255, 255, 255, -50, 50, 200);
   
    P.show();      
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cam.setViewport([0,0,windowWidth, windowHeight]);
}