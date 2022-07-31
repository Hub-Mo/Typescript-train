import {Radio} from './radio';
import {Engine} from './Engine';


export class Car{
    //it is convention to start property names in TypeScript with an underscore.
    // If you want to known why, remove the underscore and see if your compiler is throwing you an error!

    private _miles : number = 0;
    private _Radio : Radio;
    private _Engine : Engine;

    //By changing this variable to readonly I have in essence created a property constant.
    // the only subtle difference is that you can write once to the variable inside the constructor
    private readonly FUEL_MILEAGE: number = 10;

    constructor() {
        this._Radio = new Radio();
        this._Engine = new Engine(100);
    }

    get miles(): number {
        return this._miles;
    }

//Take attention to these getter and setters


    get radio(): Radio {
        return this._Radio;
    }

    get engine(): Engine {
        return this._Engine;
    }





    drive() {
        if(this._Engine.status === false || this._Engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._Engine.handleFuel();
        this._miles += this.FUEL_MILEAGE;
    }
}
