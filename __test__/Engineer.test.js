const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('create an engineer object with a name', () =>{
    const engineer = new Engineer('testEmployee');
    expect(engineer.name).toBe('testEmployee');
});

test('create an engineer object with a ID', () =>{
    const testID = 1
    const engineer = new Engineer('', testID);
    expect(engineer.id).toBe(testID);
});

test('create an engineer object with an email', () =>{
    const engineer = new Engineer('', '', 'test@email.com');
    expect(engineer.email).toBe('test@email.com');
});

test('create an engineer object with an github', () =>{
    const engineer = new Engineer('', '', '', 'testgithub');
    expect(engineer.github).toBe('testgithub');
});

test('getRole should return Employee', () =>{
    const engineer = new Engineer('', '', '', '');
    expect(engineer.getRole()).toBe('Engineer');
});

test('getGithub should return testgithub', () =>{
    const engineer = new Engineer('', '', '', 'testgithub');
    expect(engineer.getGithub()).toBe("This Employee's Github account is:  testgithub");
});