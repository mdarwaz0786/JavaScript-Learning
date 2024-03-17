// delete():
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(fruits);

// Output: ["Banana", , "Apple", "Mango"]

// Finished.