const Employee = require('./employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
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
        if (typeof officeNumber !== "string" || !officeNumber.trim().length){
            throw new Error("Expected parameter 'office number' to be a non-empty string");
        }
    }
    getRole(){
        console.log(`Role: ${this.role}`);
        return this.role;
    }

    getOfficeNumber(){
        console.log(`${this.role} OfficeNumber: ${this.officeNumber}`);
        return this.officeNumber;
    }

    printStatus(){
        console.log(`${this.role} Stats, Name: ${this.name} ID: ${this.id} email: ${this.email} Office Number: ${this.officeNumber}`);
        return [this.name,this.id,this.email,this.role,this.officeNumber];
    }
}

module.exports = Manager;