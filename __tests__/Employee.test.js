const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        test('When an object is created, it should containe a name, id, email, and role "Employee"', () => {
            const obj = new Employee("testName",1,"testEmail");
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect(obj.role).toEqual("Employee");
        });

        test('When an object is created, it should throw an error if no arguements are provided', () => {
            const cb = () => new Employee();
            expect(cb).toThrow()
        });

        test('When an object is created with no id, it should throw an error', () => {
            const cb = () => new Employee("testName", "testEmail");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no email, it should throw an error', () => {
            const cb = () => new Employee("testName", 1);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            expect(cb).toThrow(err);
        });
    });
    describe("Print Status", () => {
        test("Should return an array of parameters", () => {
            const name = "testName";
            const id = 1;
            const email = "hello@gmail.com";
            const role = "Employee";
            const obj = new Employee(name,id,email);
            mock = obj.printStatus();
            expect(mock).toEqual([name,id,email,role]);
        });
    });
    
    describe('GET Name', () => {
        test('Should return the employee name', () => {
            const name = "testName";
            const id = 1;
            const email = "hello@gmail.com";
            const role = "Employee";
            const obj = new Employee(name,id,email);
            mock = obj.getName();
            expect(mock).toEqual(name);
        });
    });

    describe('GET ID', () => {
        test('Should return the employee ID', () => {
            const name = "testName";
            const id = 1;
            const email = "hello@gmail.com";
            const role = "Employee";
            const obj = new Employee(name,id,email);
            mock = obj.getId();
            expect(mock).toEqual(id);
        });
    });

    describe('GET Email', () => {
        test('Should return the employee Email', () => {
            const name = "testName";
            const id = 1;
            const email = "hello@gmail.com";
            const role = "Employee";
            const obj = new Employee(name,id,email);
            mock = obj.getEmail();
            expect(mock).toEqual(email);
        });
    });

    describe('GET Role', () => {
        test('Should return the employee Role', () => {
            const name = "testName";
            const id = 1;
            const email = "hello@gmail.com";
            const role = "Employee";
            const obj = new Employee(name,id,email);
            mock = obj.getRole();
            expect(mock).toEqual(role);
        });
    });
});
