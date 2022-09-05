//part 1
// create class for vehicle and create a honk method that returns "Beep.". Create another method toString which returns the make, model, and year;
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'Beep.';
    }

    toString() {
        return `The vehicle is a ${this.make}, ${this.model}, ${this.year}.`;
    }
}

const newVehicle = new Vehicle("Honda", "Civic", "1999");
// part 2
// Create a class for Car that extends from Vehicle and create a method numWheels that equals to 4;
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//part 3
//Create a class for motorcycle that extends from Vehicle. Create a revEngine() method that returns "VROOM!!!" and equal numWheels to 2;
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!!';
    }
}


//part 4
// Create a Garage class that stores an array of vehicles, capacity of # of vehicles, and an add method.
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!"
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we are full.";
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';
    }
}