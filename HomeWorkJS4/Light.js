import Truck from './Truck.js';

export default class Light extends Truck{
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = "Light Truck";
    }

transportLightCargo(){
     console.log(`Light Cargo Transporter
        Model: ${this.model};
        Year: ${this.year};
        MaxSpeed: ${this.maxSpeed};`);
    } 
    
static method(){
    console.log(`Hello world!`);
    } 
} 
 
Light.method();