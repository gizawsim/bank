class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    return `Name - ${this.name} || Age - ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, companyName, salary, jobTitle) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.companyName = companyName;
  }
}

const gizaw = new Employee("Gizaw", 37, "VF", "System Administrator", 20000);
console.log(gizaw.print());
