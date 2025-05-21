// Different data types
let stringVar = "Hello World";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "John", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let symbolVar = Symbol("description");
let bigIntVar = 9007199254740991n;
let functionVar = function() { return "I am a function"; };

// Type checking
console.log("Type checking:");
console.log(typeof stringVar);    // string
console.log(typeof numberVar);    // number
console.log(typeof booleanVar);   // boolean
console.log(typeof nullVar);      // object
console.log(typeof undefinedVar); // undefined
console.log(typeof objectVar);    // object
console.log(typeof arrayVar);     // object
console.log(typeof symbolVar);    // symbol
console.log(typeof bigIntVar);    // bigint
console.log(typeof functionVar);  // function

// Mathematical operations
let a = 10;
let b = 5;

console.log("\nMathematical operations:");
console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus
console.log(a ** b); // Exponentiation

// Assignment operators
let x = 10;
console.log("\nAssignment operators:");
x += 5;  console.log(x); // 15
x -= 3;  console.log(x); // 12
x *= 2;  console.log(x); // 24
x /= 4;  console.log(x); // 6
x %= 4;  console.log(x); // 2
x **= 3; console.log(x); // 8

// Logical operators
console.log("\nLogical operators:");
console.log(true && false);  // AND
console.log(true || false);  // OR
console.log(!true);         // NOT

// Bitwise operators
console.log("\nBitwise operators:");
console.log(5 & 3);   // AND
console.log(5 | 3);   // OR
console.log(5 ^ 3);   // XOR
console.log(~5);      // NOT
console.log(5 << 1);  // Left shift
console.log(5 >> 1);  // Right shift
console.log(5 >>> 1); // Unsigned right shift 