const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name = ''){
        super(name);

        this.github = ''
    }

    getRole(){
        return `Engineer`
    }

    getGithub(){
        return `This Employee's Github account is:  ${this.github}`
    }
}