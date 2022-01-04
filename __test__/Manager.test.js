const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('create a manager object with a name', () =>{
    const manager = new Manager('testEmployee');
    expect(manager.name).toBe('testEmployee');
});

test('create an manager object with a ID', () =>{
    const testID = 1
    const manager = new Manager('', testID);
    expect(manager.id).toBe(testID);
});

test('create an manager object with an email', () =>{
    const manager = new Manager('', '', 'test@email.com');
    expect(manager.email).toBe('test@email.com');
});

test('create an manager object with an officenumber', () =>{
    const manager = new Manager('', '', '', 'testofficenumber');
    expect(manager.officenumber).toBe('testofficenumber');
});

test('getRole should return Manager', () =>{
    const manager = new Manager('', '', '', '');
    expect(manager.getRole()).toBe('Manager');
});