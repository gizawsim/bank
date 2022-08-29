// Person
const Person = function (name, age) {
  this.name = name;
  this.age = age;
  //   this.print = function () {
  //     return `Name - ${this.name} || Age - ${this.age}`;
  //   };
};

// Print
Person.prototype.print = function () {
  return `Name - ${this.name} || Age - ${this.age}`;
};

// Employee
const Employee = function (name, age, companyName, salary, jobTitle) {
  Person.call(this, name, age);
  this.name = name;
  this.age = age;
  this.companyName = companyName;
  this.jobTitle = jobTitle;
  this.salary = salary;
};

Employee.prototype = Object.create(Person.prototype);

// gizaw
// const gizaw = new Person("Gizaw", 37);
// console.log(gizaw.print());
// const adane = new Person("Adane", 29);
// console.log(adane.print());

// Gizaw
const employeeObject = new Employee(
  "Gizaw",
  37,
  "VF",
  "System Administrator",
  20000
);
console.log(employeeObject.print());

// {}
// {}.name = "Gizaw"
// {name:"Gizaw"}.age = 37
// {name:"Gizaw", age: 37}.companyName = "VF"
// {name:"Gizaw",age:37,companyName:"VF"}.jobTitle = "System Administrator"
// {name:"Gizaw",age:37,companyName:"VF", jobTitle: "System Administrator"}.salary = 20000
// {{name:"Gizaw",age:37,companyName:"VF", jobTitle: "System Administrator", salary:20000}
