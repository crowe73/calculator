// Temporary prompts for user inputs for now.
let a = prompt('Please enter a number: ');
let b = prompt('Please enter a second number: ');
let number1 = parseInt(a);
let number2 = parseInt(b);
console.log('number1 is', number1);
console.log('number2 is', number2);

// Functions to call to test with prompt values.
add(number1, number2);
subtract(number1, number2);
multiply(number1, number2);
divide(number1, number2);

// Add.
function add(number1, number2)
{
    let addValue = (number1 + number2);
    console.log(`${number1} + ${number2} =`, addValue);
    //return addValue;
}

// Subtract.
function subtract(number1, number2)
{
    let subtractValue = (number1 - number2);
    console.log(`${number1} - ${number2} =`, subtractValue);
    //return subtractValue;
}

// Multiply.
function multiply(number1, number2)
{
    let multiplyValue = (number1 * number2);
    console.log(`${number1} * ${number2} =` , multiplyValue);
    //return multiplyValue;
}

// Divide.
function divide(number1, number2)
{
    let divideValue = (number1 / number2);
    console.log(`${number1} / ${number2} =` , divideValue);
    //return divideValue;
}