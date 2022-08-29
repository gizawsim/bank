// objects
const user = {
  name: "Gizaw",
  age: 37,
  jobTitle: "System Administrator",
  isDead: true,
  print: function () {
    if (this.isDead) {
      console.log(`${this.name} is dead at ${this.age} years old`);
    } else {
      console.log(
        `${this.name} is ${this.age} years old and work as ${this.jobTitle}`
      );
    }
  },
};

// const user = new Object({})

console.log(user.print());
// console.log(`Name - ${user.name}`);
// console.log(`Age - ${user["age"]}`);
// console.log(`Job Title - ${user.jobTitle}`);
// console.log(Object.keys(user));
// console.log(Object.values(user));
