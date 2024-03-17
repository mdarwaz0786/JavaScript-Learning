// sort():
// Sorts the elements of an array in place and returns the sorted array.
// By default, the sort() method sorts values as strings.
// The sorting is performed based on the Unicode code points of the elements by default.
// The elements are converted to strings before they are compared.

const fruits = ['orange', 'apple', 'banana'];
fruits.sort(); // Sorts the array alphabetically.
console.log(fruits); // Output: ['apple', 'banana', 'orange']

const number = [10, 3, 6, 1, 8, 9, 20,];
number.sort(); // numeric values will be sorted as strings leading to incorrect result.
console.log(number); // Output: [1,10,20,3,6,8,9]

// sort() method will produce incorrect result when sorting numbers.
// you can fix this by providing a compare function.

// Compare Function:
// syntax: array.sort(compareFunction)
// array: The array that you want to sort.
// compareFunction (optional): A function that defines the sort order.
// If compare function not provided, the elements will be sorted based on their string representations.

const numbers = [5, 10, 2, 1, 15];
numbers.sort((a, b) => a - b); // (a - b) short array in ascending order.
console.log(numbers); // Output: [1, 2, 5, 10, 15]
console.log(numbers[0]); // Output: 1  (return lowest value of array).

numbers.sort((a, b) => b - a); // (b - a) short array in descending order.
console.log(numbers); // Output: [15, 10, 5, 2, 1]
console.log(numbers[0]); // Output: 15 (return highest value of Array).

// a - b result is negative, a is sorted before b.
// a - b result is positive, b is sorted before a.
// a - b result is 0, no changes are done with the sort order of the two values.

// Sorting Object Array:

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// Output:
//   [
//     { name: 'Bob', age: 25 },
//     { name: 'Alice', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ]

// Note that the sort() method sorts the original array in place and also returns the sorted array.
// So, if you want to create a sorted copy without altering the original array.
// you should first make a copy of the array and then sort it.

const num = [5, 10, 2, 1, 15];
const sortedNum = [...num].sort((a, b) => a - b);
console.log(sortedNum); // Output: [1, 2, 5, 10, 15]
console.log(num); // Output: [5, 10, 2, 1, 15] (original array remains unchanged).

// Finished.