// Method:
// function inside object.

// this:
// inside object this point to object.

const person = {
  firstName: "Arwaz",
  age: 18,
  about: personInfo,
};

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
};

person.about();