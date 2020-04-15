const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// According to 9.3.5, the following two lines will never be used again:
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;


// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));