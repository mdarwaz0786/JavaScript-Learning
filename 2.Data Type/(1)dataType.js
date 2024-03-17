// Data Type: 
// Primitive Data Type and Non-Primitive Data Type.
// Data type represent the kind of data.

// Primitive Data Type: 
// Number, String, Boolean, Undefined, Null, Symbol, BigInt.
// Primitive Data types are predefined. 
// These data types are immutable, meaning their values cannot be changed once they are created.

// Number:
// Represent both integer and floating point number.
let age = 30;
let pi = 3.14;

// String: 
// Represent a sequence of characters enclosed within single or double quotes.
let myName = "Arwaz";

// Boolean: 
// Represent a logical value, either true or false.
let isStudent = true;
let hasCar = false;

//  Undefined:
//  Represent a variable that has been declared but not assigned a value.
let undefinedVar;

// Null: 
// Represent an intentional absence of any value.
let emptyValue = null;

// Symbol:
// Represent unique and immutable data type, often used as a key in object to avoid name clash.
let id = Symbol("unique identifier");

// BigInt:
// It can be used to store integer values that are too big.
let x = BigInt("123456789012345678901234567890");
let y = 7867535355664466n;

// Non-Primitive Data Type: 
// Object, Array, Function.
// Non-Primitive data type is created by the programmer.
// These data type is mutable, meaning their value can be changed once they are created.

// Object:
// Represent a collection of key value pair where value can be of any data type, including other object.
// Everything is object in javascript.
let person = {
    name: "John Doe",
    age: 30,
    isStudent: true,
};

// Array:
// With the help of an array, we can store more than one element under a single name.
let numbers = [1, 2, 3, 4, 5];

// Function:
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when we call it.
function myFunction(a, b) {
    return a * b;
};
let result = myFunction(4, 5);
console.log(result);

// Finished.





