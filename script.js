let display = document.getElementById("display");
let currentInput = "";

function clearDisplay() {
    display.value = "";
    currentInput = "";
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.value = currentInput;
    }
}

function setOperator(operator) {
    if (currentInput !== "") {
        currentInput += operator;
        display.value = currentInput;
    }
}

function calculate() {
    if (currentInput !== "") {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch (error) {
            display.value = "Error";
        }
    }
}
