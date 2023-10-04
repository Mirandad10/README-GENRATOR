const inq = require('inq');
const fs = require('fs');
const genreateMarkdown = require('./generateMarkdown')

// questions array
const questions = [
    inq
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'what is your project title?',
            },
            {
                type: 'list',
                name: 'license',
                message: 'pick license for project?',
                choices: ['MIT', 'GPLv3', 'BSD 3-Clause', 'None'],
            },

            {
                type: 'input',
                name: 'description',
                message: 'provide description of project:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'how is this project installed',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'how is this project used',
            },

            {
                type: 'input',
                name: 'test',
                message: 'how can users run test for project?',
            },
            {
                type: 'input',
                name: 'contact',
                message: 'enter github info',
            }



        ])
        .then((data) => {
            const readMeAnswers = genreateMarkdown(data)
            const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
            fs.writeFile(filename, readMeAnswers,
                (err) => err ? console.error(err) : console.log('succesful'))
        })

];



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
