const Employee = require('./lib/employee'); 
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern  = require('./lib/intern');


const employee = new Employee()
employee.printStatus();
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();
console.log("\n");



// const eng = new Engineer("michael", 2, "test@email.com", "michael3");
// eng.printStatus();
// eng.getName();
// eng.getId();
// eng.getEmail();
// eng.getRole();
// eng.getGithub();
// console.log("\n");

// const man = new Manager("Damian", 3, "hello@gmail.com", "23A");
// man.printStatus();
// man.getName();
// man.getId();
// man.getEmail();
// man.getRole();
// man.getOfficeNumber();
// console.log("\n");


// const int = new Intern();
// int.printStatus();
// int.getName();
// int.getId();
// int.getEmail();
// int.getRole();
// console.log("\n");
