
let inp = document.getElementById('inp');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let zero = document.getElementById('0');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let ans = document.getElementById('ans');
let clear = document.getElementById('clear');
let clearEntry = document.getElementById('clearEntry');
let backspace = document.getElementById('backspace');
let decimal = document.getElementById('decimal');

let currentInput = '';
let operator = '';
let previousInput = '';
let shouldResetDisplay = false;


function updateDisplay(value) {
    inp.value = value || '0';
}


function appendNumber(num) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }

    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay(currentInput);
}


function setOperator(op) {
    if (currentInput === '') return;

    if (previousInput !== '' && operator !== '') {
        calculate();
    }

    operator = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}


function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;

    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            if (current === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
    shouldResetDisplay = true;
}


zero.onclick = () => appendNumber('0');
one.onclick = () => appendNumber('1');
two.onclick = () => appendNumber('2');
three.onclick = () => appendNumber('3');
four.onclick = () => appendNumber('4');
five.onclick = () => appendNumber('5');
six.onclick = () => appendNumber('6');
seven.onclick = () => appendNumber('7');
eight.onclick = () => appendNumber('8');
nine.onclick = () => appendNumber('9');
decimal.onclick = () => {
    if (currentInput.indexOf('.') === -1) {
        appendNumber('.');
    }
};


add.onclick = () => setOperator('+');
subtract.onclick = () => setOperator('-');
multiply.onclick = () => setOperator('×');
divide.onclick = () => setOperator('÷');


ans.onclick = calculate;

clear.onclick = () => {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
};

clearEntry.onclick = () => {
    currentInput = '';
    updateDisplay('0');
};

backspace.onclick = () => {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    } else {
        currentInput = '';
        updateDisplay('0');
    }
};


document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '.') {
        if (currentInput.indexOf('.') === -1) {
            appendNumber('.');
        }
    } else if (e.key === '+') {
        setOperator('+');
    } else if (e.key === '-') {
        setOperator('-');
    } else if (e.key === '*') {
        setOperator('×');
    } else if (e.key === '/') {
        e.preventDefault();
        setOperator('÷');
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Escape') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    } else if (e.key === 'Backspace') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        } else {
            currentInput = '';
            updateDisplay('0');
        }
    }
});


updateDisplay('0');
