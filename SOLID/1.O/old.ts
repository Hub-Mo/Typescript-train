interface IMakesSound {
    makeSound: () => string;
}

abstract class Animal implements IMakesSound{
    protected _name : string;
    protected _type : string;
    protected _sound : string;

    constructor(value) {
        this._name = value;
    }
    abstract makeSound(): string;
    abstract get type();
}
class Dog extends Animal{
    protected _name : string;
    protected _type: string = 'dog';
    protected _sound: string = 'woef woef';

    constructor(value) {
        super(value);

    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return this._sound
    }
}

class Cat extends Animal {
    protected _name : string;
    protected _type : string = 'cat';
    protected _sound : string = 'miauw';

constructor(value) {
    super(value);
}

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return this._sound
    }
}

class Parrot extends Animal {
    protected _name : string;
    protected _type : string = 'parrot';
    protected _sound : string = 'i am a pirate';

constructor(value) {
    super(value);
}

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return this._sound
    }
}

class Penguin extends Animal {
    protected _name : string;
    protected _sound : string = 'kwwraawk';
    protected _type : string = 'penguin';

constructor(value) {
    super(value);
}

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return this._sound;
    }
}

class Bear extends Animal {
    protected _name : string;
    protected _sound : string = 'raawrr';
    protected _type : string = 'bear';

constructor(value) {
    super(value);
}

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    makeSound() : string {
        return this._sound
    }
}

class Zoo {
    private _animals : Array<Animal> = new Array<Animal>();

    public addAnimal(animal: Animal) {
        this._animals.push(animal);
    }

    get animals(): Array<Animal> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Oliver'));
zoo.addAnimal(new Dog('Marley'));
zoo.addAnimal(new Parrot('Jumpers'));
zoo.addAnimal(new Penguin('Roger'));
zoo.addAnimal(new Bear('Jamal'));

console.log(zoo)

zoo.animals.forEach((animal) => {
    console.log(animal);
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});