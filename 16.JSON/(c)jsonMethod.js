// stringify():
// Convert a JavaScript object to a JSON string.
let student = {
    name: "Arwaz",
    age: 24,
};

let data = JSON.stringify(student);
console.log(data);

// output
// {
//     "name": "Arwaz",
//      "age": 24
// }

// parse():
// Convert a JSON string into an javaScript object.
let str = `{ "name": "Arwaz", "age": 24 }`;
let obj = JSON.parse(str);
console.log(obj);

// output
// {
//     name: 'Arwaz',
//     age: 24
// }

// Finished.