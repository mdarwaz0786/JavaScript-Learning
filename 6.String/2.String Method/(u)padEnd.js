// padEnd(targetLength, padString):
// this method is used to pad a string with a specified character at the end (right) until it reaches a desired length.
// If the original string is already equal to or longer than the target length, no padding will be added.

const originalString = "Hello";
console.log(originalString.padEnd(10));       // Output: "Hello     "
console.log(originalString.padEnd(10, "*"));  // Output: "Hello*****"
console.log(originalString.padEnd(5, "*"));   // Output:  "Hello" (the originalString is already 5 characters long, so no padding is added.)

// Finished.