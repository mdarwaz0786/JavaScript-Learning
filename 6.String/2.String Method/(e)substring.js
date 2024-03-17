// substring(startIndex, endIndex):
// The substring() method returns a new string that contains the characters from startIndex to endIndex (excluding endIndex). 
// If endIndex is not provided, it goes to the end of the string.
// If startIndex is greater than endIndex, the arguments are swapped.

const str = "Hello World";
console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(6)); // Output: "World"
console.log(str.substring(5, 0)); // Output: "Hello" (arguments are swapped)

// Finished.


