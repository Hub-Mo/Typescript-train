export class Engine {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._status = false;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get status() {
        return this._status;
    }
    get fuel() {
        return this._fuel;
    }
    turnOn() {
        this._status = true;
    }
    turnOff() {
        this._status = false;
    }
    handleFuel() {
        this._fuel -= 1;
    }
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}
