// This is the javascript file :p lmao

const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const buttons = calculator.querySelectorAll('button');

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        calculate();
    }
});


function appendtodisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}