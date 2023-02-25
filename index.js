// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use your project.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What resources did you use to build this project?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What type of licese does your project have?',
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
 
}

// TODO: Create a function to initialize app
function init() { 
    
}

// Function call to initialize app
init();
