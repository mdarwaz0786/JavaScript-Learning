// Spread Operator (...):
// The ... operator expands an iterable (like an array) into more elements.

// Combining Array:
// You can use the spread operator to concatenate arrays or create a new array with the elements of other arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Output: [1, 2, 3, 4, 5, 6]

// Copying (Clone) Array: 
// The spread operator can be used to create a shallow copy of an array.

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Output: [1, 2, 3]

// Adding elements to an array:
// The spread operator can be used to Adding elements to an array.

const myArr = [1, 2, 3];
const newArray = [...myArr, 4, 5];

// Output: [1, 2, 3, 4, 5]

// Finished.