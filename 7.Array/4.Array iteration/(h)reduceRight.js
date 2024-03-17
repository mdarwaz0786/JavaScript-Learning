// reduceRight():
// Similar to reduce(), but processes the array from right to left.

const numbers = [1, 2, 3, 4, 5];
const concatenated = numbers.reduceRight((acc, curr) => acc + curr.toString(), '');
console.log(concatenated); // Output: '54321' (concatenation from right to left)

// Finished.