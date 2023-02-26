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
            type: 'input',cd
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
            message: 'What resources or collaborations did you use to build this project?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of licese does your project have?',
            choices: ['GNU GPLv3', 'MIT', 'Boost Software License 1.0'],
        },
    ])

// TODO: Create a function to write README file

// How do I get the data from generateMardown.js to be saved here?
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err)) {
        if (error) {
            throw error;
        } else {
            console.log('README created!');
        }
    };
};

// TODO: Create a function to initialize app

// What needs to be initialized? Am I just calling functions here?  Is this where I link the generateMarkdown.js file?
function init() {

}

// Function call to initialize app
init();
