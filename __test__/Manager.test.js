const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js');

test('create an manager object', () =>{
    const manager = new Manager('testEmployee');
    expect(manager.name).toBe('testEmployee');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});