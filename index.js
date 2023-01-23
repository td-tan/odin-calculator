function operate(op, x, y) {
    switch(op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case 'x':
            return x * y;
        case '÷':
            return x / y;
    }
    return NaN;
}

const numberBtns = document.querySelectorAll('button[data-item="number"]');
const operatorBtns = document.querySelectorAll('button[data-item="operator"]');
const enterBtn = document.querySelector('button[data-item="enter"]');
const currentDisplay = document.querySelector('#current');
const prevDisplay = document.querySelector('#prev');

let number = 0;
let number2 = 0;
let operator = '';

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', e => {
        // Reset currentDisplay by 0
        if (currentDisplay.textContent === '0') {
            currentDisplay.textContent = '';
        }
        currentDisplay.textContent += e.target.textContent;
    });
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', e => {
        operator = e.target.textContent;
        prevDisplay.textContent = currentDisplay.textContent;
        number = Number(currentDisplay.textContent);
        currentDisplay.textContent = '0';
    });
});

enterBtn.addEventListener('click', () => {
    number2 = Number(currentDisplay.textContent);
    currentDisplay.textContent = operate(operator, number, number2);
});