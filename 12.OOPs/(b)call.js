// call:
// The call() method calls a function with a given this value and arguments provided individually.
const user1 = {
  firstName: "Arwaz",
  age: 18,
};

function about(hobby, occupation) {
  console.log(this.firstName, this.age, hobby, occupation);
};

about.call(user1, "cricket", "engineer");

const user2 = {
  firstName: "Rahul",
  age: 20,
};

about.call(user2, "football", "doctor");   