// for in loop:
// The for in loop is used to iterate through the key of an object.
const object = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

for (let key in object) {
    console.log(key + " : " + object[key]);
};

// output:
// name : John
// age : 30
// occupation : Engineer

// The for in loop is used to iterate through the index of an array.
const array = [10, 20, 30, 40, 50];

for (let index in array) {
    console.log(index + " : " + array[index]);
};

// output:
// 0 : 10
// 1 : 20
// 2 : 30
// 3 : 40
// 4 : 50

// The for in loop is used to iterate through the index of a string.
let string = "ARWAZ";

for (let index in string) {
    console.log(index + " : " + string[index]);
};

// output:
// 0 : A
// 1 : R
// 2 : W
// 3 : A
// 4 : Z

// Finished.

