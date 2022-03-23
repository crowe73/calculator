// Declare and initialize global variables.
let number1 = 0;
let number2 = 0;
let tempNumber1Array = [];
let tempNumber2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];

runCalculator();

// Add.
function add(number1, number2)
{
    let addValue = (number1 + number2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("add", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

// Subtract.
function subtract(number1, number2)
{
    let subtractValue = (number1 - number2);
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("subtract", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

// Multiply.
function multiply(number1, number2)
{
    let multiplyValue = (number1 * number2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("multiply", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
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
    else
    {
        let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(2);
        console.log("divide", rounded);
        const calcDisplay = document.querySelector("#display");
        calcDisplay.textContent = rounded;
    }
}

function Percent(number1, number2)
{
    // Turn percent into a decimal.
    let percentAsDecimal = (number1 / 100);
    let percent = percentAsDecimal * number2;
    console.log(`${number1}% of ${number2} is ${percent}`);
}

// Use operator variable to determine which function to call.
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
        //case '%':
            //console.log('operator is', operator);
            //Percent(number1, number2);
            //break;
        default:
            alert("Didn't receive an operator, or type not as expected.");
    }
}

function runCalculator()
{
    getNumberClicked();
    getOperatorSelection();
    runCalculation();

    function getNumberClicked()
    {
        const operandButtons = document.querySelectorAll(".operand");
        operandButtons.forEach((button) => 
        {
            button.addEventListener('click', () => 
            {
                console.log("Hit me for the first number!");
                savedFirstValue = button.getAttribute("value");
                console.log(savedFirstValue);
                const calcDisplay = document.querySelector("#display");

                // Append to number1 if multiple numbers are pressed and display it.
                if (operator == "")
                {
                    tempNumber1Array.push(savedFirstValue);
                    console.log("Show me the array1 : ", tempNumber1Array);
                    number1 = tempNumber1Array.join("");
                    console.log("Saved first value is: ", number1);
                    calcDisplay.textContent = number1;
                }
                else
                {
                    // Append to number2 if multiple numbers are pressed and display out.
                    tempNumber2Array.push(savedFirstValue);
                    console.log("Show me the array2 : ", tempNumber2Array);
                    number2 = tempNumber2Array.join("");
                    console.log("Number2 is: ", number2);
                    calcDisplay.textContent = number2;
                }
            })
        })
    }

    function getOperatorSelection()
    {
        const operatorButtons = document.querySelectorAll(".operator");
        operatorButtons.forEach((button) => 
        {
            button.addEventListener('click', () => 
            {
                console.log("Hit me operator!");
                operator = button.getAttribute("value");
                console.log(operator);
                tempOperatorArray.push(operator);
                console.log("Store temp operator in array for string calculations: ", tempOperatorArray);

                // Enable the decimal button if disabled from previous click/use.
                document.querySelector(".decimal").disabled = false;
                console.log("Decimal button should be enabled.");

                // Check to see if a multi-operand string exists and needs calculated on the fly.
                if ((tempNumber1Array != "") && (tempNumber2Array != ""))
                {
                    const calcDisplay = document.querySelector("#display");
                    number1 = tempNumber1Array.join("");
                    number2 = tempNumber2Array.join("");
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
                    console.log("Running STRING calculations now");
                    operate(tempOperator, number1, number2);
                    let tempStringValue = calcDisplay.textContent;
                    console.log("Temp string value: ", tempStringValue);
                    console.log("Clearing out the arrays and numbers now!");
                    tempNumber1Array = [];
                    tempNumber2Array = [];
                    number1 = 0;
                    number2 = 0;
                    console.log("array 1:", tempNumber1Array);
                    console.log("array 2:", tempNumber2Array);
                    console.log("number 1:", number1);
                    console.log("number 2:", number2);
                    tempNumber1Array.push(tempStringValue);
                    number1 = tempNumber1Array.join("");
                    console.log("Pushed string value to array 1: ", tempNumber1Array);
                }
            })
        })
    }

    function runCalculation()
    {
        const equalsButton = document.querySelector(".equals");
        equalsButton.addEventListener('click', () => 
        {
            console.log("Time to run the math!", number1, number2, operator);
            const calcDisplay = document.querySelector("#display");
            number1 = parseFloat(number1);
            number2 = parseFloat(number2);
            operate(operator, number1, number2)
        })
    }

    // DOM for "Clear" button.
    const clearButton = document.querySelector(".clear");
    clearButton.addEventListener('click', () => 
    {
        location.reload();
    })

    // DOM for +/- button.
    const signButton = document.querySelector(".sign");
    signButton.addEventListener('click', () => 
    {
        // Append "+/-" to numberArray1 and display out.
        if (operator == "")
        {
            const calcDisplay = document.querySelector("#display");
            console.log("Negative button registered here!");
            tempNumber1Array.splice(0, 1, (tempNumber1Array[0] * -1).toString());
            console.log("Append the array with negative number: ", tempNumber1Array);
            number1 = tempNumber1Array.join("");
            calcDisplay.textContent = number1;
        }
        else
        {
            // Append "+/-" to numberArray2 and display out.
            const calcDisplay = document.querySelector("#display");
            console.log("Negative button registered here on number2!");
            tempNumber2Array.splice(0, 1, (tempNumber2Array[0] * -1).toString());
            console.log("Append the array with negative number on number2: ", tempNumber2Array);
            number2 = tempNumber2Array.join("");
            calcDisplay.textContent = number2;
        }
    })

    // DOM for decimal button.
    const decimalButton = document.querySelector(".decimal");
    decimalButton.addEventListener('click', () => 
    {
        console.log("decimal pressed");
        let decimalButton = ".";
        const calcDisplay = document.querySelector("#display");

        // Append "decimal" to numberArray1 and display out.
        if (operator == "")
        {
            const calcDisplay = document.querySelector("#display");
            console.log("Decimal button registered here!", decimalButton);
            tempNumber1Array.push(decimalButton);
            console.log("Append the array1 with decimal: ", tempNumber1Array);
            number1 = tempNumber1Array.join("");
            calcDisplay.textContent = number1;
            document.querySelector(".decimal").disabled = true;
            console.log("number1 decimal button should be disabled now"); 
        }
        else
        {
            const calcDisplay = document.querySelector("#display");
            console.log("Decimal button registered here!", decimalButton);
            tempNumber2Array.push(decimalButton);
            console.log("Append the array1 with decimal: ", tempNumber1Array);
            number2 = tempNumber2Array.join("");
            calcDisplay.textContent = number2;
            document.querySelector(".decimal").disabled = true;
            console.log("number2 decimal button should be disabled now");
        }
    })
}