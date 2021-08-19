function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinText = pin.toString();
    if (pinText.length == 4) {
        document.getElementById('generator-display').value = pin;
    }
    else {
        return getPin();
    }
}

const calculatorButton = document.getElementsByClassName('button');
const typedNumber = document.getElementById('number-display');
for (let i = 0; i < calculatorButton.length; i++){
    calculatorButton[i].addEventListener('click', function (event) {
        const number = event.target.innerText;
        if (isNaN(number)) {
            if (number == 'C') {
                typedNumber.value = '';
            }
            else if (number == '<') {
                typedNumber.value = typedNumber.value.slice(0, typedNumber.value.length - 1);
            }
        }
        else {
            typedNumber.value += number;
        }


    })
}


function getPinVerify(){
    const pin = document.getElementById('generator-display').value;
    const successMessage = document.getElementById('success-msg');
    const failMessage = document.getElementById('fail-msg');
    if (pin == typedNumber.value){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else{
        successMessage.style.display = 'none';
        failMessage.style.display = 'block';
    }
}
