console.log('hello node');
const inquirer = require('inquirer');
// const fs = require('fs');
// const generateHTML = require('./src/generateHTML');

console.log(`
=================
Add information 
for new employees 
in prompts below
================`);

const promptToAddEmployee = () => {
    return inquirer.prompt([
    {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Would you like to add a new employee',
        default: false
    }
])};

const addEmployeeInfo = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What role will the new employee',
            choices: ['Engineer', 'Intern', 'Manager'] 
        },
        {
            type:'input',
            name: 'employeeName',
            message: "What is the employee's name?",
            validate: EmployeeNameInput => {
                if (EmployeeNameInput){
                  return true;
                } else {
                  console.log ("Please enter your employee's name!");
                  return false;
                }
              }
        },
        {
            type:'input',
            name:'employeeEmail',
            message:"What is the employee's email",
            validate: EmployeeEmailInput => {
                if(EmployeeEmailInput){
                    return true;
                } else{
                    console.log("Please enter the Employee's Email!")
                    return false;
                }
            }
        },
        {
            type:'number',
            name:'employeeIdNumber',
            message:'What is the employee ID number?',
        },
    ])
};

promptToAddEmployee().then(addEmployeeInfo)
