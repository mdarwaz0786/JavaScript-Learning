// Array Destructuring:
// it allow you to extract element from the array and assign them to variable.

const numbers = [1, 2, 3, 4, 5, 6];
const [a1, a2, a3, ...rest] = numbers;
console.log(a1);     // Output: 1
console.log(a2);     // Output: 2
console.log(a3);     // Output: 3
console.log(rest);   // Output: [4, 5, 6]


// Object Destructuring:
// it allow you to extract properties from the object and assign them to variable.
const person = {
  myName: "John",
  age: 30,
  occupation: "Engineer"
};

const { age, myName, occupation, } = person;

console.log(age);          // Output: 30
console.log(myName);       // Output: John
console.log(occupation);   // Output: Engineer


// Finished.