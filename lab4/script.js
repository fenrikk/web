// Creating objects with different data types
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    features: ["GPS", "Bluetooth"],
    owner: null
};

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true,
    genres: ["Fiction", "Classic"]
};

const computer = {
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    price: 1299.99,
    inStock: true
};

const weather = {
    temperature: 25,
    condition: "Sunny",
    humidity: 60,
    windSpeed: 10,
    forecast: ["Sunny", "Cloudy", "Rain"]
};

// Adding and modifying values
person.email = "john@example.com";
person.age = 31;
person.hobbies.push("coding");

if (person.age > 30) {
    person.isAdult = true;
} else {
    person.isAdult = false;
}

// Switch case for day of week
const day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Unknown";
}

console.log("Today is:", dayName);

// Object methods
const newPerson = Object.assign({}, person, { role: "Developer" });
console.log("New person object:", newPerson);

Object.freeze(book);
// book.title = "New Title"; // This will not work because the object is frozen

const personKeys = Object.keys(person);
console.log("Person object keys:", personKeys);

const personEntries = Object.entries(person);
console.log("Person object entries:", personEntries);

// Example of using Object methods in practice
const config = {
    apiKey: "12345",
    maxRetries: 3,
    timeout: 5000
};

const configKeys = Object.keys(config);
console.log("Config keys:", configKeys);

const configEntries = Object.entries(config);
console.log("Config entries:", configEntries);

const frozenConfig = Object.freeze(config);
// frozenConfig.apiKey = "67890"; // This will not work because the object is frozen 