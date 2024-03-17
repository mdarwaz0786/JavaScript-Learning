// Unary Operators:
// These operators perform operations on a single operand.
// They are used to manipulate and transform data.

// Types of Unary Operators:
// Unary plus (+): Converts an operand into a number.
// Unary minus (-): Converts an operand into a negative number.
// Increment (++): Increments the value of the operand by 1.
// Decrement (--): Decrements the value of the operand by 1.

// Unary Plus (+):
// The unary plus operator converts its operand into a number if it's not already, otherwise, it keeps the value as is.

let strNumber = "42";
let num1 = +strNumber;
console.log(num1); // return: 42

// Unary minus(-):
// The unary negation operator negates its operand, effectively converting it into a negative number if it's a numeric value.

let num2 = 42;
let negNum = -num2;
console.log(negNum); // return: -42

// Increment Operator (++):
// The increment operators increase the value of their operand by 1, respectively.
// They can be used in both prefix and postfix forms.

let num = 10;
console.log(++num); // return: 11 (prefix increment)
console.log(num++); // return: 11 (postfix increment, num is now 12)


// Decrement Operators (--):
// The decrement operators decrease the value of their operand by 1, respectively.
// They can be used in both prefix and postfix forms.

console.log(--num); // return: 11 (prefix decrement, num is now 11)
console.log(num--); // return: 11 (postfix decrement, num is now 10)

// Finished.
