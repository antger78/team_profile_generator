const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js');

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

// test('gets employee name object', () =>{
//     const employee = new Employee('testEmployee');

//     // expect(employee.getName()).toHaveProperty('name');
//     expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
// });

// test('gets employee ID object', () =>{
//     const employee = new Employee('testEmployee');

//     expect(employee.getId()).toHaveProperty('id');
// });

// test('gets employee email object', () =>{
//     const employee = new Employee('testEmployee');

//     expect(employee.getEmail()).toHaveProperty('email');
// });

// test('gets employee role object', () =>{
//     const employee = new Employee('testEmployee');

//     expect(employee.getRole()).toEqual(expect.any(String));
// });