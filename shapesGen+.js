const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require('./shapes')

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

// circle
// class Circle {
//     constructor(cx, cy, r) {

//         this.cx = cx;
//         this.cy = cy;
//         this.r = r;

//     }

//     render() {
//         return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}"/><text font-family="Calibri" x="50" y="65" font-size="48" font-weight="bold" fill="#FFF" stroke= "black" text-anchor="middle">`
//     }

// }

// function to write .svg file
const publishLogo = (fileName, data) => {

    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log(err) } else { console.log("logo successfully generated enjoy!") }
    });

};

// function to genrate logo
const generateLogo = function (answers) {

    const shape = generateShape(answers.logoShape);


    return `
    <svg fill= "${answers.logoColor}" xmlns="http://www.w3.org/2000/svg" >
    ${shape.render()}
    <![CDATA[${answers.logoTxt}]]></text>
    </svg>
    `
};

// shape logic
function generateShape(logoShape) {

    let imgShape = '';
    if (logoShape == 'Circle') {
        imgShape = new Circle(50, 50, 50)
    }
    return imgShape;

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
        publishLogo('logo.svg', logoContent)

    })
}

init();

module.exports = {

    generateShape,
    generateLogo

}