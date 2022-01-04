class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return `Employee name is ${this.name}`
    }

    getId(){
        return `Employee ID is ${this.id}`
    }

    getEmail(){
        return `Employee email is ${this.email}`
    }

    getRole(){
        return `Employee`
    }
}

module.exports = Employee;