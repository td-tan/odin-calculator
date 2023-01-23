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

numberBtns.forEach((numberBtn) => {
    numberBtn.addEventListener('click', e => {
        display.textContent = e.target.textContent;
    });
});