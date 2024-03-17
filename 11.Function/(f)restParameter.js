// Rest Parameter:
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// The rest parameter is denoted by three dots (...) followed by a parameter name, and it must be the last parameter in the function definition.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
const total = sum(1, 2, 3, 4, 5);
console.log(total); // Output: 15
// In this example, the sum function takes any number of arguments and stores them in the numbers array.
// then the sum function uses the reduce method to add up all the numbers in the array and return the total sum.



// you can use the rest parameter with any function, whether it has other parameters or not. 
function printNames(greeting, ...names) {
    names.forEach(name => {
        console.log(`${greeting}, ${name}`);
    });
}
printNames("Hello", "John", "Alice", "Bob");
// In this example, the printNames function accepts a greeting as the first argument and any number of names as the rest of the arguments. 
// then printNames function uses the rest parameter ...names to collect all the names into an array and iterates over them to print the greetings.

// Output:
// Hello, John
// Hello, Alice
// Hello, Bob

// Finished.

