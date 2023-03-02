// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of user questions
const questions = [
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
        message: 'What is your Github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// This function writes the generated README file and stores it in the folder labelled "dist" in the project directory.
function writeReadMe(data) {
    fs.writeFile('./dist/README.md', data, (err) => {
        if (err) {
            throw error;
        } else {
            console.log('README created!');
        }
    })
};

// This function provides the instructions to ask the questions, generate the markdown file, and write that file to the directory.
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers);
            writeReadMe(markdown);
        })
}

// Function call to initialize app, starts the process.
init();
