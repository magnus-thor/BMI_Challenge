const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let calc = fs.readFileSync('./src/calculator.js');
let person = fs.readFileSync('./src/person.js');
eval(calc + person + `\nexports.Person = Person;\nexports.BMICalculator = BMICalculator;`)