// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What should someone do if they have an issue?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address for further questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }
];

inquirer.prompt(questions).then(answers => {
    const readmeContent = generateReadme(answers);
    console.log(readmeContent);
});
// TODO: Create a function to write README file
const fs = require('fs');

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log(`Successfully wrote to ${fileName}`);
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

function generateReadme(answers) {
    return `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- Installation
- Usage
- Contributing
- Tests
- Questions

## Installation
To install necessary dependencies, run the following command:
\`\`\`bash
npm install
\`\`\`

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
To run tests, run the following command:
\`\`\`bash
npm test
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at ${answers.github}.
`;
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateReadme(answers);
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error('An error occurred during initialization:', error);
        });
}

// Function call to initialize app
init();
