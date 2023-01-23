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
const display = document.querySelector('#display');
let number = 0;
numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', e => {
        number = Number(e.target.textContent);

        // Reset display by 0
        if (display.textContent === '0') {
            display.textContent = '';
        }
        display.textContent += number;
    });
});