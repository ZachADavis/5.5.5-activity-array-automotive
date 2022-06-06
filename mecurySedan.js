
//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super( make, model, year, color, mileage);
        this.maxPassengers = 4;
        this.passengers = 0;
        this.numWheels = 4;
        this.maxSpeed = 260;
        this.fuel = 15000;
        this.scheduleService = false;
    }


needService() {
    if ( this.milage > 18000 )
    this.scheduleService = true
    return this.scheduleService
}

start(){
    if ( this.fuel > 0 ){
        console.log("The engine has started.")
        return this.started
    }
}

loadPassengers(pass){
    if ( this.passengers < this.maxPassengers ){
        if((pass + this.passengers) <= this.maxPassengers){
            this.passengers = pass;
            return this.passengers;
        }
        else{
            console.log("With the " + this.make + ', ' + this.model + " you will unable to transport this amount of passengers due to vehicle restrictions.")
        }
    }
    
}

}


let dasAuto = new Car("Volkwagen", "Passat", "2022", "Pink", "0");
console.log(dasAuto.make)

dasAuto.start()
dasAuto.loadPassengers(454)
dasAuto.stop()
dasAuto.needService()
console.log(dasAuto)