// Function Scope:
// JavaScript has function scope, which means variables declared inside a function are only accessible within that function.
function scopeExample() {
    const message = "I am inside the function";
    console.log(message);
}
scopeExample(); // Output: "I am inside the function"
console.log(message); // Error: message is not defined (outside the function)

// Finished.

