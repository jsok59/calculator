
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
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
    firstNumber = firstNumber + number;
    display.textContent = firstNumber;
}

function allClear() {
    firstNumber='';
    secondNumber='';
    operator='';
    display.textContent = '0';
}

const display = document.querySelector(".screen");
let firstNumber='';
let secondNumber='';
let operator='';





