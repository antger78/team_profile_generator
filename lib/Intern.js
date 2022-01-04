const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = ''){
        super(name);

        this.school = ''
    }

    getRole(){
        return `Intern`
    }

    getGithub(){
        return `This Employee went to ${this.school}`
    }
}