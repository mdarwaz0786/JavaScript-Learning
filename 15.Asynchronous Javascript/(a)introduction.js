// Synchronous JavaScript:
// Synchronous JavaScript refers to the standard behavior of JavaScript where tasks are executed in sequence, one after the other. 
// In this model, operations are processed in a blocking manner, meaning each operation must complete before the next one can start.

// Asynchronous JavaScript:
// Asynchronous JavaScript allows tasks to execute independently of the main program flow, preventing the blocking of other operations.

// setTimeout Function:
// The setTimeout function in JavaScript is used to execute a specified function or piece of code after a specified delay. 
// It allows you to set up a function to be called after a specified amount of time, measured in milliseconds.
// syntax: setTimeout(function, delay);
// The function parameter is the function you want to execute.
// The delay parameter is the time to wait before the function is executed, specified in milliseconds.

console.log("first"); // Output: first

setTimeout(function timer() {
    console.log("third"); // Output: third (run after 5 second)
}, 5000);

console.log("second");  // Output: second

// Output:
// first
// second
// third

// Finished.