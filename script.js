let displayValue = '';
let operator = '';
let operand1 = null;
let operand2 = null;

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  operand1 = null;
  operand2 = null;
  updateDisplay();
}

function toggleSign() {
  displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
  updateDisplay();
}

function appendNumber(num) {
  displayValue += num;
  updateDisplay();
}

function appendDecimal(decimal) {
  if (!displayValue.includes(decimal)) {
    displayValue += decimal;
    updateDisplay();
  }
}

function appendOperator(op) {
  if (operand1 === null) {
    operand1 = parseFloat(displayValue);
    operator = op;
    displayValue = '';
  } else {
    operand2 = parseFloat(displayValue);
    calculateResult();
    operator = op;
  }
}

function calculateResult() {
  if (operand1 !== null && displayValue !== '') {
    operand2 = parseFloat(displayValue);
    let result;
    switch (operator) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
      case '%':
        result = operand1 % operand2;
        break;
      default:
        return;
    }