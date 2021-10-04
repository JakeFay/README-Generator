const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is your projects title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your projects title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'about',
        message: 'provide information about your project (Required)',
        validate: aboutInput => {
            if (aboutInput) {
                return true;
            } else {
                console.log('Please provide information about your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'chose a license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'list your collaborators and links to their GitHub profiles, if any.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'if you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'write tests for your application, then provide examples on how to run them.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'type in your github account link with instructions on how people can reach you with questions.'
    },
    {
        type: 'input',
        name: 'link',
        message: 'type in a link for your deployed application'
    }


];

function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./output/README.md", generateMarkdown({...data}))
    })
};

init();
