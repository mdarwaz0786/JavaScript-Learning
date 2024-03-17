// Spread Operator:
// Spread operator convert string to an array of character.

const string = "123 45";
const charArray = [...string];
console.log(charArray); // output: [ "1", "2", "3", " ", "4", "5" ]

const string1 = "Md Arwaz";
const string2 = "Khan";
const charArr = [...string1, ...string2];
console.log(charArr); // output: [ "M", "d", " ", "A", "r", "w", "a", "z", "K", "h", "a", "n" ]

// Finished. 