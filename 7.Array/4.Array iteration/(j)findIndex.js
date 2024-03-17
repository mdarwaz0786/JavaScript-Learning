// findIndex():
// Returns the index of the first element in the array that satisfies a given testing function, or -1 if none is found.

const numbers = [1, 2, 3, 4, 5];
const evenNumberIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(evenNumberIndex); // Output: 1

// Finished.