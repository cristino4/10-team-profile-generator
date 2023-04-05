class Employee {
    
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        };
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
        };
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        };
    };

    printStatus(){
        console.log(`${this.role} Stats, Name: ${this.name} ID: ${this.id} email: ${this.email}`);
        return [this.name,this.id,this.email,this.role];
    }
    getName(){
        console.log(`${this.role} Name: ${this.name}`)
        return this.name
    }
    getId(){
        console.log(`${this.role} ID: ${this.id}`);
        return this.id;
    }
    getEmail(){
        console.log(`${this.role} email: ${this.email}`);
        return this.email;
    }
    getRole(){
        console.log(`Role: ${this.role}`);
        return this.role;
    }
}

module.exports = Employee;