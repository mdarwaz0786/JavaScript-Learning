// Default Parameter:
// You can assign default values to function parameters, which will be used when the arguments are not provided.
function power(base, exponent = 2) {
    return base ** exponent;
};
const result1 = power(3); // (3^2)
const result2 = power(2, 4); // (2^4)
console.log(result1); // Output: 9
console.log(result2); // Output: 16

// Finished.