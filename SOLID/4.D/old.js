class Oven {
    on() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 4000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    off() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 6000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
}
class ElectricOven {
    on() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE POWER ON!</p>";
        }, 1000);
        console.log("POWER IS ON!"); //insert fart humor here
        this._isOn = true;
    }
    off() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE POWER IS OFF!</p><hr>";
        }, 3000);
        console.log("THE POWER IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no power!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
}
class Restaurant {
    constructor(name, oven) {
        this._name = name;
        this._oven = oven;
    }
    Cook(item) {
        this._oven.on();
        this._oven.bake(item);
        this._oven.off();
    }
}
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");
*/
let crepery = new Restaurant("Crepery", new ElectricOven());
crepery.Cook("crepes");
