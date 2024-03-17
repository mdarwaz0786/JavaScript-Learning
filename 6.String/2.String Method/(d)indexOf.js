// indexOf(searchValue, fromIndex):
// The indexOf() method returns the index of the first occurrence of the specified searchValue in the string, return -1 if not found.
// The optional fromIndex parameter allows you to start the search from a specific index.

const str = "Hello World";
console.log(str.indexOf("o")); // Output: 4
console.log(str.indexOf("o", 5)); // Output: 7 (Starting search from index 5)
console.log(str.indexOf("z")); // Output: -1 (Not found)

// Finished.
