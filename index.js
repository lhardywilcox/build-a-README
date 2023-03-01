// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions =[
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
            message: 'What resources or collaborations did you use to build this project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of licese does your project have?',
            choices: ['GNU GPLv3', 'MIT', 'Boost Software License 1.0'],
        },
         {
            type: 'input',
            name: 'tests',
            message: 'What tests have been developed for this project?',
        },
         {
            type: 'input',
            name: 'github',
            message: 'What is the address of your github account?',
        },
         {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ];
  

// TODO: Create a function to write README file

// How do I get the data from generateMarkdown.js to be saved here?  Do I call generateMarkdown as part of this function?
function writeReadMe(data) {
    fs.writeFile('./dist/README.md', data, (err) => {
        if (err) {
            throw error;
        } else {
            console.log('README created!');
        }
    })
  
};

// TODO: Create a function to initialize app

// What needs to be initialized? Am I just calling functions here?  Is this where I link the generateMarkdown.js file?
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        //How do I get these answers over to the generateMarkdown.js?
        const markdown = generateMarkdown(answers);
        writeReadMe(markdown);
    })
}



// Function call to initialize app
init();
