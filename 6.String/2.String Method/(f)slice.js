// slice(startIndex, endIndex):
// The slice(startIndex, endIndex) method return a new string, it allow negative index.
// endIndex is exclusive.

const str = "Hello World";
console.log(str.slice(0, 5));        // Output: "Hello"
console.log(str.slice(6));           // Output: "World"
console.log(str.slice(-6));          // Output: " World"

// Finished.