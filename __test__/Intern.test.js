const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

// jest.mock('../lib/Intern.js');

test('create an intern object with a name', () =>{
    const intern = new Intern('testEmployee');
    expect(intern.name).toBe('testEmployee');
});

test('create an intern object with a ID', () =>{
    const testID = 1
    const intern = new Intern('', testID);
    expect(intern.id).toBe(testID);
});

test('create an intern object with an email', () =>{
    const intern = new Intern('', '', 'test@email.com');
    expect(intern.email).toBe('test@email.com');
});

test('create an intern object with an github', () =>{
    const intern = new Intern('', '', '', 'testschool');
    expect(intern.school).toBe('testschool');
});

test('getRole should return Employee', () =>{
    const intern = new Intern('', '', '', '');
    expect(intern.getRole()).toBe('Intern');
});

test('getSchool should return testschool', () =>{
    const intern = new Intern('', '', '', 'testschool');
    expect(intern.getSchool()).toBe("This Employee went to testschool");
});