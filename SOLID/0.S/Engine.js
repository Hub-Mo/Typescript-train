export class Engine {
    constructor() {
        this._status = false;
    }
    get status() {
        return this._status;
    }
    turnOn() {
        this._status = true;
    }
    turnOff() {
        this._status = false;
    }
}
