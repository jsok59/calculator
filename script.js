
function add(firstNumber, secondNumber) {
    return Number(firstNumber) + Number(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return Number(firstNumber) - Number(secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return Number(firstNumber) * Number(secondNumber);
}

function divide(firstNumber, secondNumber) {
    return Number(firstNumber) / Number(secondNumber);
}

function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case '+':
            return add(firstNumber, secondNumber);

        case '-':
            return subtract(firstNumber, secondNumber);

        case '/':
            return divide(firstNumber, secondNumber);

        case '*':
            return multiply(firstNumber, secondNumber);
    }
}

function setDisplay(number){
    if (!operator) {
        firstNumber = firstNumber + number;
        display.textContent = firstNumber;
    } else {
        secondNumber = secondNumber + number;
        display.textContent = secondNumber;
    }
}

function allClear() {
    firstNumber='';
    secondNumber='';
    operator='';
    display.textContent = '0';
}

function setOperator(input_ops) {
    if (operator && secondNumber) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        display.textContent = firstNumber;
        operator = input_ops;
        secondNumber = '';
    } else {
        operator = input_ops;
    }
}

function eval() {
    if (firstNumber && secondNumber && operator) {
        firstNumber = operate(firstNumber, secondNumber, operator)
        display.textContent = firstNumber;  
        secondNumber = '';   
        operator = '';     
    }

}

const display = document.querySelector(".screen");
let firstNumber='';
let secondNumber='';
let operator='';





