// Bitwise Operators:
// Bitwise operators in JavaScript perform operations on the binary representations of numeric values.
// They manipulate individual bits of the operands.

// Types of Bitwise Operators:
// Bitwise AND (&): Performs a bitwise AND operation.
// Bitwise OR (|): Performs a bitwise OR operation.
// Bitwise XOR (^): Performs a bitwise exclusive OR operation.
// Bitwise NOT (~): Inverts the bits of its operand.
// Left shift (<<): Shifts the bits of the left operand to the left by the number of positions specified in the right operand.
// Right shift (>>): Shifts the bits of the left operand to the right by the number of positions specified in the right operand.
// Zero-fill right shift (>>>): Shifts the bits to the right and fills the leftmost bits with zeroes.

let num1 = 5;
let num2 = 3;
console.log(num1 & num2); // return: 1 
console.log(num1 | num2); // return: 7
console.log(num1 ^ num2); // return: 6
console.log(~num1); // return: -6 
console.log(num1 << 1); // return: 10 
console.log(num1 >> 1); // return: 2 
console.log(num1 >>> 1); // return: 2 

// Finished.
