
const Employee = require('./employee')
class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        this.role = "Engineer";
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        // if (typeof id !== "number" || isNaN(id) || id < 0) {
        //     throw new Error("Expected parameter 'id' to be a non-negative number");
        // }
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof github !== "string" || !github.trim().length){
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
    }

    printStatus(){
        console.log(`${this.role} Stats, Name: ${this.name} ID: ${this.id} email: ${this.email} Github: ${this.github}`);
        return [this.name,this.id,this.email,this.role,this.github];
    }

    getGithub() {
        console.log(`${this.role} Github: ${this.github}`);
        return this.github;
    }

    getRole(){
        console.log(`Role: ${this.role}`);
        return this.role;
    }

}

module.exports = Engineer;