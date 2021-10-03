// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input

// Questions


const questions = [
    // title
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

    // short description
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
        message: 'what does the user need to know?'
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

    }


];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        //console.log(data)
        writeToFile("README.md", generateMarkdown({...data}))
    })
};

// Function call to initialize app
init();

// if your project is deployed, include a link to the deployed application here.
