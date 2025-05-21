// Function declaration
function calculateSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Please provide valid numbers';
    }
    return a + b;
}

// Function expression
const multiplyNumbers = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    }
    return x * y;
};

// Arrow function
const checkString = (str) => {
    if (typeof str !== 'string') {
        return 'Please provide a valid string';
    }
    return str.length > 5 ? 'Long string' : 'Short string';
};

// Function with switch case
function getDayType(day) {
    switch(day.toLowerCase()) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            return 'Weekday';
        case 'saturday':
        case 'sunday':
            return 'Weekend';
        default:
            return 'Invalid day';
    }
}

// Function with array operations
const processArray = (arr) => {
    if (!Array.isArray(arr)) {
        return 'Please provide a valid array';
    }
    return arr.filter(item => item > 0).map(item => item * 2);
};

// Class hierarchy
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        return 'Some sound';
    }

    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    makeSound() {
        return 'Woof!';
    }

    getInfo() {
        return `${super.getInfo()}, Breed: ${this.breed}`;
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    makeSound() {
        return 'Meow!';
    }

    getInfo() {
        return `${super.getInfo()}, Color: ${this.color}`;
    }
}

// Example usage
console.log(calculateSum(5, 3));
console.log(multiplyNumbers(4, 6));
console.log(checkString('Hello World'));
console.log(getDayType('Monday'));
console.log(processArray([1, -2, 3, -4, 5]));

const dog = new Dog('Buddy', 3, 'Golden Retriever');
const cat = new Cat('Whiskers', 2, 'Orange');

console.log(dog.getInfo());
console.log(dog.makeSound());
console.log(cat.getInfo());
console.log(cat.makeSound()); 