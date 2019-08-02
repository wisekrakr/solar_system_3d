let planets = [];

class Star extends CelestialBody{    
  
    constructor(_radius, _bodies, _image){
       super(TagEnum.STAR, _radius, 0, 0, _bodies, _image);   
       this.angle = Math.random();
    }

    //Sets a random image for a random planet
    setImage(number) {  
        let image;
        switch(number){
            case 0:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Earth.jpg");
                break;
            case 1:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Fungi.png");
                break;
            case 2:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Jupiter.jpg");
                break;
            case 3:
                image= loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Mars.jpg");
                break;
            case 4:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Neptune.jpg");
                break;
            case 5:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Planet_2.png");
                break;
            case 6:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Planet_Farma.jpg");
                break;
            case 7:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Planet_4.png");
                break;
            case 8:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Mercury.jpg");
                break;
            case 9:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/watermars.jpg");
                break;
            default:
                console.log(number +" No image found");
        }   

        return image;
    }

    addOrbitingBodies(){
        if (this.bodies !== null) {           
            for (let i = planets.length; i < this.bodies; i++) {                
                planets[i] = new Planet(
                    Math.random() * ((this.radius / 5) + (this.radius / 3)), 
                    (this.radius * 2) + Math.random() * ((this.radius * 8) + (this.radius * 3)), 
                    (Math.random() * 0.05) + 0.01,
                    Math.round(Math.random() * 3),
                    this.setImage(i)
                );                              
            }
        }     
    }
     
    show() {   
        this.render();
        this.addOrbitingBodies();
   
        for(let i = planets.length -1; i > 0; i--){
            planets[i].show();        
        }
    }
}