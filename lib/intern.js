const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        // if (typeof id !== "number" || isNaN(id) || id < 0) {
        //     throw new Error("Expected parameter 'id' to be a non-negative number");
        // }
        if (typeof id !== "string" || !id.trim().length || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a non-empty number string");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof school !== "string" || !school.trim().length){
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
    }
    printStatus(){
        console.log(`${this.role} Stats, Name: ${this.name} ID: ${this.id} email: ${this.email} School: ${this.school}`);
        return [this.name,this.id,this.email,this.role,this.school];
    }

    getSchool(){
        console.log(`${this.role} School: ${this.school}`);
        return this.school;
    }
    
    getRole(){
        console.log(`Role: ${this.role}`);
        return this.role;
    }
}

module.exports = Intern;