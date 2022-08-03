interface IFireTingys {
    on()
    off()
    bake(item : string)

}

class Oven implements IFireTingys{
    private _isOn : boolean;

    public on() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
        }, 4000);
        console.log("THE GAS IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public off() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 6000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 5000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

class ElectricOven implements IFireTingys{
    private _isOn : boolean;

    public on() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE POWER ON!</p>";
        }, 1000);
        console.log("POWER IS ON!"); //insert fart humor here
        this._isOn = true;
    }

    public off() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE POWER IS OFF!</p><hr>";
        }, 3000);
        console.log("THE POWER IS OFF!"); //insert fart humor here
        this._isOn = false;
    }
    public bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no power!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}

class Restaurant {
    private _name : string;
    private _oven : IFireTingys;

    constructor(name : string, oven : IFireTingys) {
        this._name = name;
        this._oven = oven;
    }

    public Cook(item : string) {
        this._oven.on();
        this._oven.bake(item);
        this._oven.off();
    }
}


let bakery = new Restaurant("Bakery", new ElectricOven());
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");
*/
let crepery = new Restaurant("Crepery", new Oven());
crepery.Cook("crepes");

