// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const marked = require('marked');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message:'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message:'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message:'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'credits',
        message:'Please provide credits for your project.',
    },
    {
        type: 'input',
        name: 'badges',
        message:'Please provide badges for your project.',
    },  
    {
        type: 'input',
        name: 'features',
        message:'Please provide features for your project.',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message:'Please provide how to contribute information for your project.',

    },
    {
        type: 'input',
        name: 'tests',
        message:'Please provide tests for your project.',
   },
   {
        type: 'input',
        name: 'deployedLink',
        message:'Please provide a link to your deployed project.',
    },
    {

        type: 'input',
        name: 'questions',
        message:'Please provide questions for your project.',
    },

    {
        type: 'input',
        name: 'github',
        message:'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message:'Please provide your email address.',
    },
    {
        type: 'input',
        name: 'name',
        message:'Please provide your full name.',
    },
    {
        type: 'input',
        name: 'year',
        message:'Please provide the current year.',
    }
];

const licenseBadge = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'None': '',
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
    }

// Function call to initialize app
init();

