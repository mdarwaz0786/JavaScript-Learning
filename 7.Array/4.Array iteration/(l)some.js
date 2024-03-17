// some():
// Tests whether at least one element in the array passes the test implemented by the provided function.
// Returns true if any element passes the test; otherwise, false

const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // Output: true

// Finished.