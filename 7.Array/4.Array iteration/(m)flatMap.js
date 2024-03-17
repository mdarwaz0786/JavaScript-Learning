// flatMap():
// this method first maps all elements of an array and then creates a new array by flattening the array.

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr); // Output: [2, 4, 6, 8, 10, 12]

var twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const newArray = twoDArray.flatMap((row) => row.map((element) => element * 2));
console.log(newArray);  // output: [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Finished.