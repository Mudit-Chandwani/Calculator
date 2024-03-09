let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function evaluate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace'];

    if (allowedKeys.includes(key)) {
        if (key === 'Enter') {
            evaluate();
        } else if (key === 'Backspace') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const equalsButton = document.querySelector('.equals');
    equalsButton.addEventListener('click', evaluate);
});
