import {Radio} from './radio';
import {Engine} from './Engine';


export class Car{
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!

    private _fuel : number = 0;
    private _miles : number = 0;
    private _Radio : Radio;
    private _Engine : Engine;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number, theRadio : Radio, theEngine : Engine) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._Radio = theRadio;
        this._Engine = theEngine;
    }

    get miles(): number {
        return this._miles;
    }

//Take attention to these getter and setters
    get fuel(): number {
        return this._fuel;
    }

    get radio(): Radio {
        return this._Radio;
    }

    get engine(): Engine {
        return this._Engine;
    }

    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }



    drive() {
        if(this._Engine.status === false || this._fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}
