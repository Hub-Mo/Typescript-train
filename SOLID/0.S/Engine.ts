
export class Engine {
    private _fuel : number = 0;
    private _status: boolean = false;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get status(): boolean {
        return this._status;
    }

    get fuel(): number {
        return this._fuel;
    }

    turnOn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }

    handleFuel(){
        this._fuel -= 1;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}