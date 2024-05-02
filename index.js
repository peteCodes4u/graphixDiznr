const inquirer = require("inquirer");
const fs = require('fs');

const questions = [

    // logo text
    {
        type: "input",
        name: "logoTxt",
        message: "Please enter the text to use for the logo (3 character max) "
    },

    // shape selection
    {
        type: "list",
        name: "logoShape",
        message: "Please select the shape for this logo",
        choices: ["Circle", "Square", "Triangle", "Heart", "Skull", "Bird", "Hands"],
    },
];

// function to write .svg file
const publishLogo = (fileName, data) => {

    fs.writeFile(fileName, data, (err) => {
        if(err){ console.log(err)} else {console.log("logo successfully generated enjoy!")}
    });

};

// function to genrate logo
const generateLogo = function (answers) {

    return `${answers.logoTxt}
    ${answers.logoShape}
    
    `

};

// intialize function
function init() {
        // helpful hint to quit application
        const helpfulHint = () => {
            console.log("Helpful hint - to quit this app anytime press ctrl + c")
        }
    
        helpfulHint();

        // prompt for user input
        inquirer.prompt(questions).then((answers) => {

            const logoContent = generateLogo(answers);
            publishLogo('New-Logo.svg', logoContent)

        })
}

init();

module.exports = {

    generateLogo

}