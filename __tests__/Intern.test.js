const Intern = require ('../lib/intern');

describe('Intern', () => {
    describe('Initialization',() => {
        test('When an object is created, it should containe a name, id, email, school and role "Intern"', () => {
            const obj = new Intern("testName","1","testEmail","testschool");
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("school" in obj).toEqual(true);
            expect(obj.role).toEqual("Intern");
        });

        test('When an object is created, it should throw an error if no arguements are provided', () => {
            const cb = () => new Intern();
            expect(cb).toThrow()
        });

        test('When an object is created with no id, it should throw an error', () => {
            const cb = () => new Intern("testName", "testEmail", "testschool");
            const err = new Error("Expected parameter 'id' to be a non-empty number string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no email, it should throw an error', () => {
            const cb = () => new Intern("testName", "1");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no school, it should throw an error', () => {
            const cb = () => new Intern("testName", "1","testEmail");
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrow(err);
        });
    });

    describe("Print Status", () => {
        test("Should return an array of parameters", () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const school = "UCLA";
            const role = "Intern";
            const obj = new Intern(name,id,email,school);
            mock = obj.printStatus();
            expect(mock).toEqual([name,id,email,role,school]);
        });
    });

    describe('GET Role', () => {
        test('Should return the Intern Role', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Intern";
            const school = "UCLA";
            const obj = new Intern(name,id,email,school);
            mock = obj.getRole();
            expect(mock).toEqual(role);
        });
    });

    describe('GET school', () => {
        test('Should return the Intern school', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Intern";
            const school = "UCLA";
            const obj = new Intern(name,id,email,school);
            mock = obj.getSchool();
            expect(mock).toEqual(school);
        });
    });
});
