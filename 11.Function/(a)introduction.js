// Function:
// A function in JavaScript is a block of code that can be defined and reused to perform a specific task.
// Syntax:
function functionName(parameters) {
    // Function body: code to be executed
    // Return statement (optional) 
};

// create a simple function that adds two numbers:
function addNumbers(a, b) {
    return a + b;
};
const result = addNumbers(5, 10);
console.log(result); // Output: 15
// In this example, we created a function called addNumbers.
// it takes two parameters a and b and returns their sum.

// Parameters and Arguments:
// Functions can take parameters, which act as placeholders for values that need to be passed to the function when it's called. 
// Arguments are the actual values passed to the function when it is invoked.
function greet(name) {
    return `Hello, ${name}`;
}
const greeting = greet("John");
console.log(greeting); //Output: Hello, John
// In this case, name is the parameter, and "John" is the argument passed to the greet function.

// Return Statement:
// A return statement is used to specify the value that the function should return.
// If a function doesn't have a return statement, it will implicitly return undefined.
function multiply(a, b) {
    return a * b;
}
const product = multiply(3, 4); // product will be 12
console.log(product); //Outtput: 12

// Finished.
