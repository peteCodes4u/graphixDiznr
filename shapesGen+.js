const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require('./lib/shapes');
const Square = require('./lib/shapes') 

const questions = [
    // logo text
    {
        type: "input",
        name: "logoTxt",
        message: "Please enter the text to use for the logo (3 character max)"
    },
    // shape selection
    {
        type: "list",
        name: "logoShape",
        message: "Please select the shape for this logo",
        choices: ["Circle", "Square", "Triangle", "Heart", "Skull", "Bird", "Hands"],
    },
    // color
    {
        type: "input",
        name: "logoColor",
        message: "Please enter the color to use for the logo"
    },
];

// function to write .svg file
const publishLogo = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log(err) } else { console.log("logo successfully generated enjoy!") }
    });
};

// function to generate logo
const generateLogo = function (answers) {
    const shape = generateShape(answers.logoShape);
    return `
        <svg fill="${answers.logoColor}" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <![CDATA[${answers.logoTxt}]]></text>
        </svg>
    `;
};

// shape logic function
function generateShape(logoShape) {
    let imgShape = '';
    if (logoShape == 'Circle') {
        imgShape = new Circle(50, 50, 50);
    } else {
        if(logoShape == 'Square'){imgShape = new Square(10, 10, 100, 100)}
    }
    return imgShape;
};

// initialize function
function init() {
    // helpful hint to quit application
    const helpfulHint = () => {
        console.log("Helpful hint - to quit this app anytime press ctrl + c")
    }

    helpfulHint();

    // prompt for user input
    inquirer.prompt(questions).then((answers) => {
        const logoContent = generateLogo(answers);
        publishLogo('logo.svg', logoContent);
    });
}

init();

module.exports = {
    generateShape,
    generateLogo
};