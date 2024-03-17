// Higher Order Function: Function return function.
// higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.

// Example 1: A higher-order function that takes a function as an argument.
function doSomethingWithFunc(func) {
    console.log("Before calling the provided function");
    func(); // Call the function that was passed as an argument.
    console.log("After calling the provided function");
};
function sayHello() {
    console.log("Hello");
};
doSomethingWithFunc(sayHello);

// Example 2: A higher-order function that returns a function.
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
};
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Output: 10 (5 * 2)
console.log(triple(5)); // Output: 15 (5 * 3)

// Finished.