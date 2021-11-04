import Car from './Car.js';

export default class Toyota extends Car {
    constructor(carModel, carYear, maxSpeed, type){
        super(carModel, carYear, maxSpeed, type);
        this.nationality = 'Japanese';
    }

    displayInfo() {
        super.displayInfo();
        console.log(`\tMy nationality: ${this.nationality}`);
    }
}