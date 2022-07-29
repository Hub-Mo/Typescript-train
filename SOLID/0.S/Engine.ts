
export class Engine {
    private _status: boolean = false;

    get status(): boolean {
        return this._status;
    }

    turnOn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }
}