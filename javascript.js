// Temporary prompts for user inputs for now.
let a = prompt('Please enter a number: ');
let operator = prompt('Please enter the operator (+, -, *, /');
let b = prompt('Please enter a second number: ');
let number1 = parseFloat(a);
let number2 = parseFloat(b);

// Main.
console.log('number1 is', number1);
console.log('number2 is', number2);
operate(operator, number1, number2);

// Compute the result.
function operate(operator, number1, number2)
{
    switch(operator)
    {
        case '+':
            console.log('operator is', operator);
            add(number1, number2);
            break;
        case '-':
            console.log('operator is', operator);
            subtract(number1, number2);
            break;
        case '*':
            console.log('operator is', operator);
            multiply(number1, number2);
            break;
        case '/':
            console.log('operator is', operator);
            divide(number1, number2);
            break;
        case '%':
            console.log('operator is', operator);
            Percent(number1, number2);
            break;
        default:
            alert("Didn't receive an operator, or type not as expected.");
    }
}

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

    // Error check for division by 0.
    if (divideValue == "Infinity")
    {
        return alert("Error! Can't divide by 0.");
    }
    else return console.log(`${number1} / ${number2} =` , divideValue);
    //return divideValue;
}

function Percent(number1, number2)
{
    // Turn percent into a decimal.
    let percentAsDecimal = (number1 / 100);
    let percent = percentAsDecimal * number2;
    console.log(`${number1}% of ${number2} is ${percent}`);
}