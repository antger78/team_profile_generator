const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer.js');

test('create an engineer object', () =>{
    const engineer = new Engineer('testEmployee');
    expect(engineer.name).toBe('testEmployee');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});