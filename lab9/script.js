// String variables
const firstName = "John";
const lastName = "Doe";
const email = "john.doe@example.com";
const address = "123 Main Street";
const phoneNumber = "+1-555-123-4567";

// String concatenation examples
const fullName1 = firstName + " " + lastName;
const fullName2 = `${firstName} ${lastName}`;
const fullName3 = [firstName, lastName].join(" ");
const fullName4 = firstName.concat(" ", lastName);
const fullName5 = String.prototype.concat.call(firstName, " ", lastName);

console.log("Concatenation examples:");
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);
console.log(fullName5);

// Case conversion
console.log("\nCase conversion:");
console.log("Original:", firstName);
console.log("toLowerCase():", firstName.toLowerCase());
console.log("toUpperCase():", firstName.toUpperCase());

// String manipulation methods
console.log("\nString manipulation:");
const text = "  Hello, World!  ";
console.log("Original:", text);
console.log("trim():", text.trim());
console.log("replace():", text.replace("World", "JavaScript"));
console.log("match():", text.match(/[A-Z]/g));

// Sorting with localeCompare
const names = ["John", "Alice", "Bob", "Charlie", "David"];
console.log("\nSorting with localeCompare:");
console.log("Original:", names);
console.log("Sorted:", [...names].sort((a, b) => a.localeCompare(b)));

// Using includes
console.log("\nUsing includes:");
console.log("Email contains '@':", email.includes("@"));
console.log("Email contains '.com':", email.includes(".com"));
console.log("Email contains 'gmail':", email.includes("gmail"));

// Welcome users function with template strings
function welcomeUsers(users) {
    return users.map(user => {
        const { name, role, department } = user;
        return `Welcome, ${name}! You are a ${role} in the ${department} department.`;
    });
}

const users = [
    { name: "John", role: "Developer", department: "Engineering" },
    { name: "Alice", role: "Designer", department: "Creative" },
    { name: "Bob", role: "Manager", department: "Sales" }
];

console.log("\nWelcome messages:");
console.log(welcomeUsers(users));

// Palindrome checker function
function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedWord = cleanWord.split("").reverse().join("");
    return cleanWord === reversedWord;
}

console.log("\nPalindrome checker:");
console.log("'radar':", isPalindrome("radar"));
console.log("'hello':", isPalindrome("hello"));
console.log("'A man, a plan, a canal: Panama':", isPalindrome("A man, a plan, a canal: Panama"));
console.log("'Was it a car or a cat I saw?':", isPalindrome("Was it a car or a cat I saw?")); 