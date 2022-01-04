const Employee = require('../lib/Employee');

test('create an employee object with a name', () =>{
    const employee = new Employee('testEmployee');
    expect(employee.name).toBe('testEmployee');
});

test('create an employee object with a ID', () =>{
    const testID = 1
    const employee = new Employee('', testID);
    expect(employee.id).toBe(testID);
});

test('create an employee object with an email', () =>{
    const employee = new Employee('', '', 'test@email.com');
    expect(employee.email).toBe('test@email.com');
});

test('getRole should return Employee', () =>{
    const employee = new Employee('', '', '');
    expect(employee.getRole()).toBe('Employee');
});