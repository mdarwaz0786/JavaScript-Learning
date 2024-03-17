// reduce(): 
// Executes a reducer function on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// accumulator: A variable that accumulates the results. It starts with an initial value.
// currentValue: The current element being processed in the array.
// initialValue(0): An initial value for the accumulator. If it is not provided, the first element of the array is used as the initial value, and the reduction starts from the second element.

// Finished.