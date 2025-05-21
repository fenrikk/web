// Game Character Class
class GameCharacter {
    constructor(name, type, level) {
        this._name = name;
        this._type = type;
        this._level = level;
        this._position = { x: 0, y: 0 };
    }

    // Getters and setters
    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getType() {
        return this._type;
    }

    setType(type) {
        this._type = type;
    }

    getLevel() {
        return this._level;
    }

    setLevel(level) {
        this._level = level;
    }

    move(x, y) {
        this._position.x = x;
        this._position.y = y;
        return `Moved to position (${x}, ${y})`;
    }
}

// Character subclasses
class Warrior extends GameCharacter {
    constructor(name, level) {
        super(name, 'Warrior', level);
        this._weapon = 'Sword';
    }

    attack() {
        return `${this._name} attacks with ${this._weapon}!`;
    }
}

class Mage extends GameCharacter {
    constructor(name, level) {
        super(name, 'Mage', level);
        this._spell = 'Fireball';
    }

    castSpell() {
        return `${this._name} casts ${this._spell}!`;
    }
}

// Car Constructor Function
function Car(brand, model, year, color) {
    this._brand = brand;
    this._model = model;
    this._year = year;
    this._color = color;
    this._position = { x: 0, y: 0 };
}

// Car prototype methods
Car.prototype.getBrand = function() {
    return this._brand;
};

Car.prototype.getModel = function() {
    return this._model;
};

Car.prototype.getYear = function() {
    return this._year;
};

Car.prototype.getColor = function() {
    return this._color;
};

Car.prototype.setColor = function(color) {
    this._color = color;
};

Car.prototype.move = function(x, y) {
    this._position.x = x;
    this._position.y = y;
    return `Moved to position (${x}, ${y})`;
};

// Car subclasses
function SportsCar(brand, model, year, color) {
    Car.call(this, brand, model, year, color);
    this._type = 'Sports';
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.accelerate = function() {
    return `${this._brand} ${this._model} is accelerating!`;
};

// Working with bind(), call(), apply()
const person = {
    name: 'John',
    greet: function(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
    }
};

const anotherPerson = {
    name: 'Alice'
};

// Using bind()
const greetJohn = person.greet.bind(person);
console.log(greetJohn('Hello', '!'));

// Using call()
console.log(person.greet.call(anotherPerson, 'Hi', '?'));

// Using apply()
console.log(person.greet.apply(anotherPerson, ['Hey', '...']));

// Example usage
console.log('\nGame Character Examples:');
const warrior = new Warrior('Aragorn', 10);
console.log(warrior.getName());
console.log(warrior.attack());
console.log(warrior.move(5, 5));

const mage = new Mage('Gandalf', 15);
console.log(mage.getName());
console.log(mage.castSpell());
console.log(mage.move(3, 3));

console.log('\nCar Examples:');
const sportsCar = new SportsCar('Ferrari', 'F40', 2020, 'Red');
console.log(sportsCar.getBrand());
console.log(sportsCar.getModel());
console.log(sportsCar.accelerate());
console.log(sportsCar.move(10, 10)); 