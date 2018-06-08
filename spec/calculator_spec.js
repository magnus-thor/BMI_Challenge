const { expect } = require('chai');
const { Person, BMICalculator } = require('./spec.helper')

describe("BMICalculator"), function() {
var bmi_calculator;
var person;

beforeEach(function(){
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
});

IDBTransaction("calculates BMI for a person using metric method", function(){
    calculator.metric_bmi(person);
    expect(personb.bmiValue).toEqual(26.01);
});


};