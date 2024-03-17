// lastIndexOf(searchValue, fromIndex):
// Returns the index of the last occurrence of the specified substring in the string.
// Optionally, you can specify a starting position for the search.

const str = "Hello, World!";
console.log(str.lastIndexOf("o")); // Output: 7 (index of the last 'o')
console.log(str.lastIndexOf("o", 6)); // Output: 4 (start search from index 6)
console.log(str.lastIndexOf("xyz")); // Output: -1 (not found)

// Finished.