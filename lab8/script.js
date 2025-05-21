// Creating arrays with different data types
const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'banana', 'orange'];
const booleans = [true, false, true, true];
const mixed = [1, 'hello', true, { name: 'John' }];
const objects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

// Using forEach()
console.log('forEach() example:');
numbers.forEach((num, index) => {
    console.log(`Number at index ${index}: ${num}`);
});

// Using map()
console.log('\nmap() example:');
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Using filter()
console.log('\nfilter() example:');
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Using reduce()
console.log('\nreduce() example:');
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);

// Using sort(), includes(), join()
console.log('\nOther array methods:');
const sortedStrings = [...strings].sort();
console.log('Sorted strings:', sortedStrings);
console.log('Includes "banana":', strings.includes('banana'));
console.log('Joined strings:', strings.join(' - '));

// Function to sum array using map()
function sumWithMap(arr) {
    return arr.map(num => num).reduce((acc, curr) => acc + curr, 0);
}

// Function to create sentence using reduce()
function getSentenceWithReduce(words) {
    return words.reduce((sentence, word, index) => {
        return sentence + (index === 0 ? '' : ' ') + word;
    }, '');
}

// Function to sum two arrays
function sumNumArrays(arr1, arr2) {
    return [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);
}

// Function to create welcome messages using map()
function welcomeUsers(users) {
    return users.map(user => `Welcome, ${user.name}!`);
}

// Example usage
console.log('\nFunction examples:');
console.log('Sum using map():', sumWithMap(numbers));
console.log('Sentence using reduce():', getSentenceWithReduce(strings));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log('Sum of two arrays:', sumNumArrays(array1, array2));

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];
console.log('Welcome messages:', welcomeUsers(users));

// Additional examples of array methods
console.log('\nAdditional array method examples:');
const numbersWithDuplicates = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];
console.log('Unique numbers:', uniqueNumbers);

const words = ['hello', 'world', 'javascript'];
const capitalizedWords = words.map(word => word.toUpperCase());
console.log('Capitalized words:', capitalizedWords);

const numbersToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbersToFilter
    .filter(num => num > 5)
    .map(num => num * 2);
console.log('Filtered and doubled numbers:', filteredNumbers); 