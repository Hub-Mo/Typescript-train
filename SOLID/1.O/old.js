class Animal {
    constructor(value) {
        this._name = value;
    }
}
class Dog extends Animal {
    constructor(value) {
        super(value);
        this._type = 'dog';
        this._sound = 'woef woef';
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return this._sound;
    }
}
class Cat extends Animal {
    constructor(value) {
        super(value);
        this._type = 'cat';
        this._sound = 'miauw';
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return this._sound;
    }
}
class Parrot extends Animal {
    constructor(value) {
        super(value);
        this._type = 'parrot';
        this._sound = 'i am a pirate';
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return this._sound;
    }
}
class Penguin extends Animal {
    constructor(value) {
        super(value);
        this._sound = 'kwwraawk';
        this._type = 'penguin';
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return this._sound;
    }
}
class Bear extends Animal {
    constructor(value) {
        super(value);
        this._sound = 'raawrr';
        this._type = 'bear';
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    makeSound() {
        return this._sound;
    }
}
class Zoo {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('Oliver'));
zoo.addAnimal(new Dog('Marley'));
zoo.addAnimal(new Parrot('Jumpers'));
zoo.addAnimal(new Penguin('Roger'));
zoo.addAnimal(new Bear('Jamal'));
console.log(zoo);
zoo.animals.forEach((animal) => {
    console.log(animal);
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});
