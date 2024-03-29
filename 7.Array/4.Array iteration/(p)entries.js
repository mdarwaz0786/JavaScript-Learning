// entries():
// this method returns an Array Iterator object with key/value pairs.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
    console.log(x);
};

// Output:
// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// Finished.