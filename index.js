console.log('hello node');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generateHTML');
const teamArray = [];
const fs = require('fs');

// const fs = require('fs');
// const generateHTML = require('./src/generateHTML');

console.log(`
=================
Add information 
for new employees 
in prompts below
================`);

const promptManagerInfo = () =>{
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager for this team',
            validate: managerName => {
                if (managerName){
                  return true;
                } else {
                  console.log ("Please enter your Manager's name!");
                  return false;
                }
              }
        },
        {
            type:'input',
            name:'managerEmail',
            message:"What is the managers's email",
            validate: managerEmailInput => {
                if(managerEmailInput){
                    return true;
                } else{
                    console.log("Please enter the Manager's Email!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'managerId',
            message:'What is the manager ID?',
        },
        {
            type:'input',
            name: 'managerOfficeId',
            message: "What is the Manager's office id?",
            validate: managerOfficeIdInput =>{
                if(managerOfficeIdInput){
                    return true;
                }else {
                    console.log("please enter the manager's office id!")
                    return false;
                }
            }
        }

    ]).then(
        ans =>{
            let manager = new Manager(ans.managerName, ans.managerId, ans.managerEmail, ans.managerOfficeId);
            teamArray.push(manager);
            promptToAddEmployee();
        }
        
    )
}

const promptToAddEmployee = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What role will the employee be in?',
        choices: ['intern', 'engineer', 'no new employee']
    }
]).then(
    ans => {
        switch(ans.employeeRole){
            case 'intern': 
                addInternInfo();
                break;
            case 'engineer':
                addEngineerInfo();
                break;
            case 'no new employee':
                createHTML();
                break;
        }
    })
};

const addEngineerInfo = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
            validate: EngineerNameInput => {
                if (EngineerNameInput){
                  return true;
                } else {
                  console.log ("Please enter your engineer's name!");
                  return false;
                }
              }
        },
        {
            type:'input',
            name:'engineerEmail',
            message:"What is the engineer's email",
            validate: EngineerEmailInput => {
                if(EngineerEmailInput){
                    return true;
                } else{
                    console.log("Please enter the Engineer's Email!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'engineerId',
            message:'What is the engineer ID?',
        },
        {
            type:'input',
            name: 'engineerGithub',
            message: "What is the Engineer's github account?",
            validate: EngineerGitHubInput =>{
                if(EngineerGitHubInput){
                    return true;
                }else {
                    console.log("please enter the engineer's github account!")
                    return false;
                }
            }
        }
    ]).then(
        ans =>{
            let engineer = new Engineer(ans.engineerName, ans.engineerId, ans.engineerEmail, ans.engineerGithub);
            teamArray.push(engineer);
            promptToAddEmployee();
        }
        
    )
};

const addInternInfo = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'internName',
            message: "What is the intern's name?",
            validate: InternNameInput => {
                if (InternNameInput){
                  return true;
                } else {
                  console.log ("Please enter your Intern's name!");
                  return false;
                }
              }
        },
        {
            type:'input',
            name:'internEmail',
            message:"What is the intern's email",
            validate: InternEmailInput => {
                if(InternEmailInput){
                    return true;
                } else{
                    console.log("Please enter the Intern's Email!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'internId',
            message:'What is the Intern ID?',
        },
        {
            type:'input',
            name: 'internSchool',
            message: "What is the intern's school?",
            validate: internSchoolInput =>{
                if(internSchoolInput){
                    return true;
                }else {
                    console.log("please enter the intern's school!")
                    return false;
                }
            }
        }
    ]).then(
        ans =>{
            let intern = new Intern(ans.internName, ans.internId, ans.internEmail, ans.internSchool);
            teamArray.push(intern);
            promptToAddEmployee();
        }
        
    )
};

promptManagerInfo()

const writeFile = function(html) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./src/team.html', html, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err){
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
          ok: true,
          message: 'File created!'
        });
    });
});
};

createHTML = () =>{
    console.log(teamArray);
    let pagesHTML = generateHTML(teamArray);
    writeFile(pagesHTML);
  };
