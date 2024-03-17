// Parameter Destructuring:
// Parameter destructuring in JavaScript allows you to extract values from objects or arrays passed as function arguments into distinct variables, making it easier to work with the individual values within the function

// Object Destructuring:
function printUserDetails({ name, age, email }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
};

const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

printUserDetails(user);

// In this example, the printUserDetails function takes an object as an argument and uses parameter destructuring to extract the name, age, and email properties directly. 
// This way, you can access these properties as separate variables inside the function.

// Output:
// Name: John Doe
// Age: 30
// Email: john.doe@example.com

// Array Destructuring:
// Using parameter destructuring with arrays.

function printFirstAndLast([first, , last]) {
    console.log(`First: ${first}`);
    console.log(`Last: ${last}`);
};
const names = ['John', 'Jane', 'Bob'];
printFirstAndLast(names);

// in this example, the printFirstAndLast function takes an array as an argument and uses parameter destructuring to extract the first and last elements directly into separate variables (first and last).

// Output:
// First: John
// Last: Bob

// Finished.

