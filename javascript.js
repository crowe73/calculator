// Declare and initialize global variables.
let number1 = 0;
let number2 = 0;
let tempNumber1Array = [];
let tempNumber2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];

runCalculator();

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
                savedFirstValue = button.getAttribute("value");
                const calcDisplay = document.querySelector("#display");

                // Append to number1 if multiple numbers are pressed and display it.
                if (operator == "")
                {
                    tempNumber1Array.push(savedFirstValue);
                    number1 = tempNumber1Array.join("");
                    calcDisplay.textContent = number1;
                }
                else
                {
                    // Append to number2 if multiple numbers are pressed and display out.
                    tempNumber2Array.push(savedFirstValue);
                    number2 = tempNumber2Array.join("");
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
                operator = button.getAttribute("value");
                tempOperatorArray.push(operator);

                // Enable the decimal button if disabled from previous click/use.
                document.querySelector(".decimal").disabled = false;

                // Check to see if a multi-operand string exists and needs calculated on the fly.
                if ((tempNumber1Array != "") && (tempNumber2Array != ""))
                {
                    const calcDisplay = document.querySelector("#display");
                    number1 = tempNumber1Array.join("");
                    number2 = tempNumber2Array.join("");
                    number1 = parseFloat(number1);
                    number2 = parseFloat(number2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
                    operate(tempOperator, number1, number2);
                    let tempStringValue = calcDisplay.textContent;
                    tempNumber1Array = [];
                    tempNumber2Array = [];
                    number1 = 0;
                    number2 = 0;
                    tempNumber1Array.push(tempStringValue);
                    number1 = tempNumber1Array.join("");
                }
            })
        })
    }

    function runCalculation()
    {
        const equalsButton = document.querySelector(".equals");
        equalsButton.addEventListener('click', () => 
        {
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
        const calcDisplay = document.querySelector("#display");
        if (number1 != "")
        {
            if (number2 != "")
            {
                tempNumber2Array = [];
                number2 = 0;
                calcDisplay.textContent = number2;
            }
            else
            {
                tempNumber1Array = [];
                number1 = 0;
                calcDisplay.textContent = number1;
            }
        }
    })

    // DOM for "All Clear" button.
    const allClearButton = document.querySelector(".all-clear");
    allClearButton.addEventListener('click', () => 
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
            tempNumber1Array.splice(0, 1, (tempNumber1Array[0] * -1).toString());
            number1 = tempNumber1Array.join("");
            calcDisplay.textContent = number1;
        }
        else
        {
            // Append "+/-" to numberArray2 and display out.
            const calcDisplay = document.querySelector("#display");
            tempNumber2Array.splice(0, 1, (tempNumber2Array[0] * -1).toString());
            number2 = tempNumber2Array.join("");
            calcDisplay.textContent = number2;
        }
    })

    // DOM for decimal button.
    const decimalButton = document.querySelector(".decimal");
    decimalButton.addEventListener('click', () => 
    {
        let decimalButton = ".";
        const calcDisplay = document.querySelector("#display");

        // Append "decimal" to numberArray1 and display out.
        if (operator == "")
        {
            const calcDisplay = document.querySelector("#display");
            tempNumber1Array.push(decimalButton);
            number1 = tempNumber1Array.join("");
            calcDisplay.textContent = number1;
            document.querySelector(".decimal").disabled = true;
        }
        else
        {
            const calcDisplay = document.querySelector("#display");
            tempNumber2Array.push(decimalButton);
            number2 = tempNumber2Array.join("");
            calcDisplay.textContent = number2;
            document.querySelector(".decimal").disabled = true;
        }
    })
}

// Use operator variable to determine which function to call.
function operate(operator, number1, number2)
{
    switch(operator)
    {
        case '+':
            add(number1, number2);
            break;
        case '-':
            subtract(number1, number2);
            break;
        case '*':
            multiply(number1, number2);
            break;
        case '/':
            divide(number1, number2);
            break;
        case '%':
            percent(number1, number2);
            break;
        default:
            alert("Didn't receive an operator, or type not as expected.");
    }
}

// Add.
function add(number1, number2)
{
    let addValue = (number1 + number2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = addValue;
}

// Subtract.
function subtract(number1, number2)
{
    let subtractValue = (number1 - number2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = subtractValue;
}

// Multiply.
function multiply(number1, number2)
{
    let multiplyValue = (number1 * number2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = multiplyValue;
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
        const calcDisplay = document.querySelector("#display");
        calcDisplay.textContent = divideValue;
    }
}

// Percent
function percent(number1, number2)
{
    let percentValue = (number1 / 100) * number2;
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = percentValue;
}