let clearFlag = false;
let firstNumber = 0;
let operator = '';

function updateHistory(text) {
    document.getElementById('history').value = text;
}

function plus() {
    firstNumber = parseFloat(res.value);
    operator = '+';
    clearFlag = true;
    updateHistory(`${firstNumber} +`);
}

function minus() {
    firstNumber = parseFloat(res.value);
    operator = '-';
    clearFlag = true;
    updateHistory(`${firstNumber} -`);
}

function multiplication() {
    firstNumber = parseFloat(res.value);
    operator = 'x';
    clearFlag = true;
    updateHistory(`${firstNumber} x`);
}

function division() {
    firstNumber = parseFloat(res.value);
    operator = '÷';
    clearFlag = true;
    updateHistory(`${firstNumber} ÷`);
}

function setPercentage() {
    firstNumber = parseFloat(res.value);
    operator = '%';
    clearFlag = true;
    updateHistory(`${firstNumber} %`);
}

function claerInput() {
    res.value = "0";
    firstNumber = 0;
    operator = '';
    updateHistory('');
}

function deleteLastCharacter() {
    if (res.value.length > 0) {
        res.value = res.value.slice(0, -1);
        if (res.value === "") {
            res.value = "0";
        }
    }
}

function calculate() {
    let secondNumber = parseFloat(res.value);
    let result;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case 'x':
            result = firstNumber * secondNumber;
            break;
        case '÷':
            if (secondNumber !== 0) {
                result = firstNumber / secondNumber;
            } else {
                result = 'Error';
            }
            break;
        case '%':
            result = (firstNumber * secondNumber) / 100;
            break;
        default:
            result = secondNumber;
            break;
    }

    res.value = result.toString();
    clearFlag = true;
    updateHistory(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
}

function onEqualsClick() {
    calculate();
}

function toggleSign() {
    let currentValue = parseFloat(res.value);
    if (!isNaN(currentValue)) {
        res.value = (currentValue * -1).toString();
    }
}

function digit9() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "9";
    }
}

function digit8() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "8";
    }
}

function digit7() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "7";
    }
}

function digit6() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "6";
    }
}

function digit5() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "5";
    }
}

function digit4() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "4";
    }
}

function digit3() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "3";
    }
}

function digit2() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "2";
    }
}

function digit1() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "1";
    }
}

function digit0() {
    if (res.value == "0" || clearFlag) {
        res.value = "";
        clearFlag = false;
    }
    if (res.value.length < 8) {
        res.value += "0";
    }
}

function addDecimal() {
    if (!res.value.includes('.')) {
        if (res.value === "0" || clearFlag) {
            res.value = "0.";
            clearFlag = false;
        } else {
            res.value += ".";
        }
    }
}

// Disable default keydown behavior
document.addEventListener('keydown', function(e) {
    e.preventDefault();
});
