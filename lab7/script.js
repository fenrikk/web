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

// Using for loop
console.log('For loop example:');
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number at index ${i}: ${numbers[i]}`);
}

// Using while loop
console.log('\nWhile loop example:');
let i = 0;
while (i < strings.length) {
    console.log(`String at index ${i}: ${strings[i]}`);
    i++;
}

// Using do...while loop
console.log('\nDo...while loop example:');
let j = 0;
do {
    console.log(`Boolean at index ${j}: ${booleans[j]}`);
    j++;
} while (j < booleans.length);

// Function to sum array of numbers
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Function to create sentence from array of words
function getSentence(words) {
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        sentence += words[i];
        if (i < words.length - 1) {
            sentence += ' ';
        }
    }
    return sentence;
}

// Function to sum two arrays of numbers
function sumNumArrays(arr1, arr2) {
    let total = 0;
    
    // Sum first array
    for (let i = 0; i < arr1.length; i++) {
        total += arr1[i];
    }
    
    // Sum second array
    for (let i = 0; i < arr2.length; i++) {
        total += arr2[i];
    }
    
    return total;
}

// Function to create welcome messages for users
function welcomeUsers(users) {
    const messages = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        messages.push(`Welcome, ${user.name}!`);
    }
    return messages;
}

// Example usage
console.log('\nFunction examples:');
console.log('Sum of numbers:', sum(numbers));
console.log('Sentence from words:', getSentence(strings));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log('Sum of two arrays:', sumNumArrays(array1, array2));

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];
console.log('Welcome messages:', welcomeUsers(users)); 