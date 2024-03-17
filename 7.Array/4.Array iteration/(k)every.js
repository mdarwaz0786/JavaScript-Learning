// every():
// Tests whether all elements in the array pass the test implemented by the provided function. 
// Returns true if all elements pass the test; otherwise, false.

const numbers = [1, 2, 3, 4, 5];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: false

// Finished.