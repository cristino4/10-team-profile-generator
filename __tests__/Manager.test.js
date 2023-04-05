const Manager = require ('../lib/manager');

describe('Manager', () => {
    describe('Initialization',() => {
        test('When an object is created, it should containe a name, id, email, office number and role "Manager"', () => {
            const obj = new Manager("testName","1","testEmail","testOfficeNumber");
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("officeNumber" in obj).toEqual(true);
            expect(obj.role).toEqual("Manager");
        });

        test('When an object is created, it should throw an error if no arguements are provided', () => {
            const cb = () => new Manager();
            expect(cb).toThrow()
        });

        test('When an object is created with no id, it should throw an error', () => {
            const cb = () => new Manager("testName", "testEmail");
            const err = new Error("Expected parameter 'id' to be a non-empty number string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no email, it should throw an error', () => {
            const cb = () => new Manager("testName", "1");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no office number, it should throw an error', () => {
            const cb = () => new Manager("testName", "1","testEmail");
            const err = new Error("Expected parameter 'office number' to be a non-empty string");
            expect(cb).toThrow(err);
        });
    });

    describe("Print Status", () => {
        test("Should return an array of parameters", () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const officeNumber = "23A";
            const role = "Manager";
            const obj = new Manager(name,id,email,officeNumber);
            mock = obj.printStatus();
            expect(mock).toEqual([name,id,email,role,officeNumber]);
        });
    });

    describe('GET Role', () => {
        test('Should return the manager Role', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Manager";
            const officeNumber = "23A";
            const obj = new Manager(name,id,email,officeNumber);
            mock = obj.getRole();
            expect(mock).toEqual(role);
        });
    });

    describe('GET Office Number', () => {
        test('Should return the manager office number', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Manager";
            const officeNumber = "23A";
            const obj = new Manager(name,id,email,officeNumber);
            mock = obj.getOfficeNumber();
            expect(mock).toEqual(officeNumber);
        });
    });
});
