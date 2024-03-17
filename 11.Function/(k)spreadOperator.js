// Spread Operator:

// Spread operator as a function call:
// You can use the spread operator in a function call to pass elements of an array as separate arguments to the function. This allows you to use an array's elements as individual function arguments.
function addThreeNumbers(a, b, c) {
    return a + b + c;
};
const numbers = [1, 2, 3];
const sum = addThreeNumbers(...numbers);
console.log(sum); // Output: 6
// In the example above, the ...numbers syntax spreads the elements of the numbers array as individual arguments to the addThreeNumbers function. It is equivalent to calling the function as addThreeNumbers(1, 2, 3).


// Spread operator as a function parameter:
// You can use the spread operator as a function parameter to accept multiple arguments and collect them into an array.
function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
const result = sumNumbers(1, 2, 3, 4, 5);
console.log(result); // Output: 15
// In the example above, the ...numbers syntax collects all the arguments passed to the sumNumbers function into an array called numbers. 
// Inside the function, you can treat numbers as a regular array and perform operations on it.

// Finished.
