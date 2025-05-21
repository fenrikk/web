// Creating arrays with different data types
const numbers = [1, 2, 3, 4, 5];
const strings = ['apple', 'banana', 'orange'];
const mixed = [1, 'hello', true, { name: 'John' }, [1, 2, 3]];
const booleans = [true, false, true, true];
const objects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

// Using push() and pop()
console.log('Original numbers array:', numbers);
numbers.push(6);
console.log('After push(6):', numbers);
numbers.pop();
console.log('After pop():', numbers);

// Using shift() and unshift()
console.log('\nOriginal strings array:', strings);
strings.shift();
console.log('After shift():', strings);
strings.unshift('grape');
console.log('After unshift("grape"):', strings);

// Using concat()
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const combined = array1.concat(array2, array3);
console.log('\nCombined array:', combined);

// Swap functions
function swapWithDestructuring(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

function swapTraditional(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// Example of using swap functions
const testArray = [1, 2, 3, 4, 5];
console.log('\nOriginal array:', testArray);
console.log('After swap with destructuring:', swapWithDestructuring([...testArray], 0, 4));
console.log('After swap traditional:', swapTraditional([...testArray], 0, 4));

// Array transformation functions
function doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function findMax(arr) {
    return Math.max(...arr);
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage of transformation functions
const numbersToTransform = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

console.log('\nTransformation examples:');
console.log('Original array:', numbersToTransform);
console.log('Doubled numbers:', doubleNumbers(numbersToTransform));
console.log('Even numbers:', filterEvenNumbers(numbersToTransform));
console.log('Sum of array:', sumArray(numbersToTransform));
console.log('Maximum value:', findMax(numbersToTransform));
console.log('Array without duplicates:', removeDuplicates(numbersToTransform)); 