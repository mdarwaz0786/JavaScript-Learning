// Typeof Operator:
// To determine the data type of a variable, we can use the typeof operator.

// Number:
let age = 30;
console.log(typeof age); // output: number

// String:
let myName = "Arwaz";
console.log(typeof myName); // output: string


// Boolean: 
let isStudent = true;
console.log(typeof isStudent); // output: boolean

//  Undefined:
let undefinedVar;
console.log(typeof undefinedVar); // output: undefined

// Null: 
let emptyValue = null;
console.log(typeof emptyValue); // output: object (This is bug in javascript).

// Symbol:
let id = Symbol("unique identifier");
console.log(typeof id); // output: symbol

// BigInt:
let x = BigInt("123456789012345678901234567890");
console.log(typeof x); // output: BigInt

// Object:
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true,
};
console.log(typeof person); // output: object

// Array:
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // output: object (In JavaScript array is object).

// Function:
function myFunction(a, b) {
    return a * b;
};
myFunction();
console.log(typeof myFunction);  // output: function

// Finished.