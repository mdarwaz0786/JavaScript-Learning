// endsWith(searchValue, startIndex):
// This method check if a string ends with a specific searchValue.
// The optional parameter startIndex allow you to define a specific portion of the string to check.

const str = "Hello, World";
console.log(str.endsWith("World"));      // Output: true
console.log(str.endsWith("Hello", 5));    // Output: true (Only consider first 5 characters)

// Finished.
