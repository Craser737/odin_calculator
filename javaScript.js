const ac = document.querySelector('#ac');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const del = document.querySelector('#del');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const plusMinus = document.querySelector('#plusMinus');
const percent = document.querySelector('#percent');
const equal = document.querySelector('#enter');
const display = document.querySelector('#display');
const body = document.querySelector('#body');
const column = document.querySelector('.col');
let number = '';
let numArray = [];
let operator = '';
let screenClear = false;

body.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
    const event = e.target.textContent;
    eventSwitch(event);
    console.log(e.target.textContent);
    e.target.blur();
}
});
document.addEventListener('keydown', (e) => {
    const keyEvent = e.key;
    eventSwitch(keyEvent);
});

function eventSwitch(event) {
    switch (event) {
        case 'AC':        
            clear();
            break;
        case 'Delete':
            clear();
            break;
        case '1':
            numBtn(1)
            break;
        case '2':
            numBtn(2)
            break;
        case '3':
            numBtn(3)
            break;
        case '4':
            numBtn(4);
            break;
        case '5':
            numBtn(5);5
            break;
        case '6':
            numBtn(6);
            break;
        case '7':
            numBtn(7);
            break;
        case '8':
            numBtn(8);
            break;
        case '9':
            numBtn(9);
            break;
        case '0':
            numBtn(0);
            break;
        case '.':
            if (!number.includes('.')) {
                numBtn('.');
            }
            break;
        case 'del':
            number = number.slice(0, -1);
            break;
        case 'Backspace':
            number = number.slice(0, -1);
            break;
        case '*':
            operation('*');
            break;
        case 'x':
            operation('*');
            break;
        case '\u00F7':
            operation('/');
            break;
        case '/':
            operation('/');
            break;
        case '+':
            operation('+');
            break;
        case '-':
            operation('-');
            break;
        case '+/-':
            if (number.charAt(0) !== '-') {
                number = '-' + number;
            } else {
                number = number.slice(1);
            }
            break;
        case '%':
            number = (number / 100).toString();
            break;
        case '=':1
            enter();
            break;
        case 'Enter':
            enter();
            break;
    }    
    
    if (number === '') {
        display.textContent = '0';
    } else {
        display.textContent = number.slice(0, 12);
    }
};

function clear() {
    number = '';
    numArray = [];
    operator = '';
}

function numBtn(num) {
    if (screenClear) {
        number = '';
        screenClear = false;
    }
    number = number.concat(num);
}

function operation(oper) {
    if (!number) {
        number = '0';
    };
    numArray.push(number);
    screenClear = true;
    operator = oper;
}

function enter() {
    numArray.push(number);
    switch (operator) {
        case '+':
            number = numArray.reduce((a, b) => Number(a) + Number(b)).toString();
            break;
        case '-':
            number = numArray.reduce((a, b) => Number(a) - Number(b)).toString();
            break;
        case '*':
            number = numArray.reduce((a, b) => Number(a) * Number(b)).toString();
            break;
        case '/':
            number = numArray.reduce((a, b) => Number(a) / Number(b)).toString();
            break;    
        };
    
    numArray = [];
    screenClear = true;
}

