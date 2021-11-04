import Car from "./Car.js";

export default class Nissan extends Car {
    constructor(carModel, carYear, maxSpeed, type){
        super(carModel, carYear, maxSpeed, type);
        this.name = 'Nissan';
        this.maxSpeed = '250km/h';
    }
    callMyName(){
        console.log(`I'm Nissan! Model: ${this.model};
        Type: ${this.type};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Name: ${this.name};` );
    }
}