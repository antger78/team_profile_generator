const Intern = require('../lib/Intern');

jest.mock('../lib/Intern.js');

test('create an intern object', () =>{
    const intern = new Intern('testEmployee');
    expect(intern.name).toBe('testEmployee');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});