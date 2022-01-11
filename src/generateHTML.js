function generateHTML(teamArray){
    
var Engineerteam = [];
Engineerteam = teamArray.filter((employee) => employee.getRole() === 'Engineer');

var Internteam = [];
Internteam = teamArray.filter((employee) => employee.getRole() === 'Intern');

console.log('intern team is: ', Internteam);
console.log('Engineer team is:', Engineerteam);
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamArray[0].name}</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<header><div class="container">
<nav class="justify-content-center navbar navbar-light" style="background-color: red;">
    <a class="justify-content-center navbar-brand" href="#">My Team</a>
  </nav>
</div></header>
<main>
<div class="card" style="width: 18rem;">
<div class="card-header" style="background-color: blue;">
  <p1>${teamArray[0].name}</p1>
  <br>
  <p1>Manager</p1>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${teamArray[0].id}</li>
  <li class="list-group-item">Email: <address><a href="${teamArray[0].email}">${teamArray[0].email}</a></address></li>
  <li class="list-group-item">Office Number: ${teamArray[0].officenumber}</li>
</ul>
</div>

<div>
<div class="card" style="width: 18rem;">
<div class="card-header"><p1>${JSON.stringify(Engineerteam.map(employee =>{ return employee.name})).replace(/[\[\]"]+/g,'')}</p1>
<br>
  <p1>Engineer</p1>
  </div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${JSON.stringify(Engineerteam.map(employee =>{ return employee.id})).replace(/[\[\]"]+/g,'')}</li>
  <li class="list-group-item">Email: <address><a href="${JSON.stringify(Engineerteam.map(employee =>{ return employee.email})).replace(/[\[\]"]+/g,'')}">${JSON.stringify(Engineerteam.map(employee =>{ return employee.email})).replace(/[\[\]"]+/g,'')}</a></address></li>
  <li class="list-group-item">Github: <address><a href="github.com/${JSON.stringify(Engineerteam.map(employee =>{ return employee.github})).replace(/[\[\]"]+/g,'')}">${JSON.stringify(Engineerteam.map(employee =>{ return employee.github})).replace(/[\[\]"]+/g,'')}</a></address></li>
</ul>
</div>
</div>
    
<div>
<div class="card" style="width: 18rem;">
<div class="card-header"><p1>${JSON.stringify(Internteam.map(employee =>{ return employee.name})).replace(/[\[\]"]+/g,'')}</p1>
<br>
  <p1>Intern</p1>
  </div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">ID: ${JSON.stringify(Internteam.map(employee =>{ return employee.id})).replace(/[\[\]"]+/g,'')}</li>
  <li class="list-group-item">Email: <address><a href="${JSON.stringify(Internteam.map(employee =>{ return employee.email})).replace(/[\[\]"]+/g,'')}">${JSON.stringify(Internteam.map(employee =>{ return employee.email})).replace(/[\[\]"]+/g,'')}</a></address></li>
  <li class="list-group-item">School: ${JSON.stringify(Internteam.map(employee =>{ return employee.school})).replace(/[\[\]"]+/g,'')}</li>
</ul>
</div>
</div>
    


</main>
</body>
</html>`
};
module.exports = generateHTML;

// ${JSON.stringify({Engineerteam})}