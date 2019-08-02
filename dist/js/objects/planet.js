let moons = [];

class Planet extends CelestialBody{    
  
    constructor(_radius, _distance, _orbitSpeed, _bodies, _image){
       super(TagEnum.PLANET, _radius, _distance, _orbitSpeed, _bodies, _image);         
       this.angle = Math.random() * Math.PI;            
    }

    //Sets a random image for a random moon
    setImage(number) {  
        let image;
        switch(number){
            case 0:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Ariel.jpg");
                break;
            case 1:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Moon.jpg");
                break;
            case 2:
                image = loadImage("https://raw.githubusercontent.com/wisekrakr/portfolio_website/master/dist/js/p5/objects/images/Titan.jpg");
                break;
            default:
                console.log(number +" No image found");
        }   

        return image;
    }

    addOrbitingBodies(){

        if(this.bodies !== null){
            for(let i = moons.length; i < this.bodies; i++){  
                let moonRadius = Math.random() * ((this.radius / 7) + (this.radius / 4));
                let newDistance = (this.radius * 2) + Math.random() * ((this.radius * 6)) + (this.radius * 4);
                let newSpeed = (Math.random() * 0.1) + 0.05;

                moons[i] = new Moon(
                    this.addMoonRadius(moonRadius), 
                    newDistance, 
                    newSpeed, 
                    this.setImage(i)
                    );                                           
            }   
        }           
    }       

    //Creates a moon radius.
    addMoonRadius(moonRadius){
        if(moonRadius > this.radius){
            moonRadius/=2;
        }else{
            if(moonRadius < 1){
                moonRadius *= 2;
            }
        }
        return moonRadius;
    }
    

    show() {
        push();
               
        this.orbit();
        this.render();
        this.addOrbitingBodies();

        for(let i = moons.length-1; i > 0; i--){
            moons[i].show();  
               
        }
        pop();

    }


 
}

