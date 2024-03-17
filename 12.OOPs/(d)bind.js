const user1 = {
  firstName: "Arwaz",
  age: 18,
};

function about(hobby, occupation) {
  console.log(this.firstName, this.age, hobby, occupation);
};

const newfunction1 = about.bind(user1, "cricket", "engineer");
newfunction1();

const user2 = {
  firstName: "Rahul",
  age: 20,
};

const newfunction2 = about.bind(user2, "football", "doctor");
newfunction2();

