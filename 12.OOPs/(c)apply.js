const user1 = {
  firstName: "Arwaz",
  age: 18,
};

function about(hobby, occupation) {
  console.log(this.firstName, this.age, hobby, occupation);
};

about.apply(user1, ["cricket", "engineer"]);

const user2 = {
  firstName: "Rahul",
  age: 20,
};

about.apply(user2, ["football", "doctor"]);   