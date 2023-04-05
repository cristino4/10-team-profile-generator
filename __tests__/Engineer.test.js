const Engineer = require ('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization',() => {
        test('When an object is created, it should containe a name, id, email, github and role "Engineer"', () => {
            const obj = new Engineer("testName","1","testEmail","testGithub");
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
            expect("github" in obj).toEqual(true);
            expect(obj.role).toEqual("Engineer");
        });

        test('When an object is created, it should throw an error if no arguements are provided', () => {
            const cb = () => new Engineer();
            expect(cb).toThrow()
        });

        test('When an object is created with no id, it should throw an error', () => {
            const cb = () => new Engineer("testName", "testEmail", "testGithub");
            const err = new Error("Expected parameter 'id' to be a non-empty number string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no email, it should throw an error', () => {
            const cb = () => new Engineer("testName", "1");
            const err = new Error("Expected parameter 'email' to be a non-empty string");
            expect(cb).toThrow(err);
        });

        test('When an object is created with no github, it should throw an error', () => {
            const cb = () => new Engineer("testName", "1","testEmail");
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrow(err);
        });
    });

    describe("Print Status", () => {
        test("Should return an array of parameters", () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const github = "wakpak";
            const role = "Engineer";
            const obj = new Engineer(name,id,email,github);
            mock = obj.printStatus();
            expect(mock).toEqual([name,id,email,role,github]);
        });
    });

    describe('GET Role', () => {
        test('Should return the Engineer Role', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Engineer";
            const github = "wakpak";
            const obj = new Engineer(name,id,email,github);
            mock = obj.getRole();
            expect(mock).toEqual(role);
        });
    });

    describe('GET github', () => {
        test('Should return the Engineer github', () => {
            const name = "testName";
            const id = "1";
            const email = "hello@gmail.com";
            const role = "Engineer";
            const github = "wakpak";
            const obj = new Engineer(name,id,email,github);
            mock = obj.getGithub();
            expect(mock).toEqual(github);
        });
    });
});
