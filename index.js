function operate(op, x, y) {
    switch(op) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
    }
    return NaN;
}

const numberBtns = document.querySelectorAll('button[data-item="number"]');
const operatorBtns = document.querySelectorAll('button[data-item="operator"]');
const enterBtn = document.querySelector('button[data-item="enter"]');
const display = document.querySelector('#display');

let number = 0;
let operator = '';

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', e => {
        // Reset display by 0
        if (display.textContent === '0') {
            display.textContent = '';
        }
        display.textContent += e.target.textContent;
    });
});

operatorBtns.forEach((operatorBtn) => {
    operatorBtn.addEventListener('click', e => {
        operator = e.target.textContent;
        number = Number(display.textContent);
    });
});

enterBtn.addEventListener('click', () => {
    const number2 = Number(display.textContent);
    display.textContent = operate(operator, number, number2);
});