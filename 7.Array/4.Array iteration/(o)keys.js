// Array.keys():
// it is used to return an iterator that contains the keys (indices) of an array.
// it allows you to loop through the indices of the array using a for of loop.
// also you can convert the iterator to an array using Array.from() or the spread operator.

const fruits = ['apple', 'banana', 'orange'];
const iterator = fruits.keys();

for (const key of iterator) {
    console.log(key);
};

// Output:
// 0
// 1
// 2

// Finished.

