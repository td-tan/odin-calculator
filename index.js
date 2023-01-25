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
const clearBtn = document.querySelector('button[data-item="clear"]');
const delBtn = document.querySelector('button[data-item="delete"]');

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
        if (prevDisplay.textContent !== '' && currentDisplay.textContent !== '0') {
            number = Number(prevDisplay.textContent);
            number2 = Number(currentDisplay.textContent);
            currentDisplay.textContent = operate(operator, number, number2);
        }
        operator = e.target.textContent;
        prevDisplay.textContent = currentDisplay.textContent;
        number = Number(currentDisplay.textContent);
        currentDisplay.textContent = '0';
    });
});

enterBtn.addEventListener('click', () => {
    if (!operator) {
        return;
    }
    number2 = Number(currentDisplay.textContent);
    currentDisplay.textContent = operate(operator, number, number2);
});

clearBtn.addEventListener('click', () => {
    currentDisplay.textContent = '0';
});

delBtn.addEventListener('click', () => {
    number = 0;
    number2 = 0;
    operator = '';
    prevDisplay.textContent = '';
    currentDisplay.textContent = '0';
});