import Vehicle from './Vehicle.js';

export default class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed){
        super(carModel, carYear, maxSpeed);
        this.type = "car";
        this.year = "2020";
    }
    transportPeople(){
        console.log("I'm starting transporting passengers");
    }
}