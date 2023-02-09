
// variables for checking if all form inputs are valid and updating DOM

const formName = document.getElementById("form__name")
const cardName = document.getElementById("card__front--name")
const errorName = document.getElementById('error__name')

const formCardNum = document.getElementById("form__card_number")
const cardNum = document.getElementById("card__front--num")
const errorNum = document.getElementById("error__number")

const formCvc = document.getElementById("form__cvc")
const cardCvc = document.getElementById('cvc')
const errorCvc = document.getElementById("error__cvc")

const formMonth = document.getElementById("form__month")
const cardMonth = document.getElementById('card__month')

const formYear = document.getElementById('form__year')
const cardYear = document.getElementById("card__year")

const errorDate = document.getElementById("error__date")


// Update in realtime the form inputs into the card image

const nameJS = () => {
    cardName.innerText = formName.value.toUpperCase()
}

const cvcJS = () => {
    let inputValue = formCvc.value
     // Check if the input value contains any letters 
    if (/[a-zA-Z]/.test(inputValue) ) {
        // Show error message
        errorCvc.innerText = 'Only Numbers';
        errorCvc.classList.remove('hidden');
    }
    if (!/[a-zA-Z]/.test(inputValue) ) {
        // remove error message and reset
        errorCvc.innerText = "Can't be blank";
        errorCvc.classList.add('hidden');
    }
    
    cardCvc.innerText = formCvc.value
}


const monthJS = () => {
    let inputValue = formMonth.value
    let numValue = parseInt(inputValue);
    if (/[a-zA-Z]/.test(inputValue) || inputValue > 12 || (inputValue == 0 && inputValue.length == 2 )) {
        errorDate.innerText = 'Must be valid month';
        errorDate.classList.remove('hidden');
    }
    if (!/[a-zA-Z]/.test(inputValue) && inputValue <= 12 && inputValue >=1) {
        errorDate.innerText = "Can't be blank";
        errorDate.classList.add('hidden');    
    }
    cardMonth.innerText = formMonth.value
}

const yearJS = () => {
    let inputValue = formYear.value;
    if (/[a-zA-Z]/.test(inputValue) || (inputValue < 23 && inputValue.length == 2)) {
        errorDate.innerText = 'Must be valid year';
        errorDate.classList.remove('hidden');
    }
    if (!/[a-zA-Z]/.test(inputValue) && (inputValue > 22 && inputValue.length == 2)) {
        errorDate.innerText = "Can't be blank";
        errorDate.classList.add('hidden');
    }
    cardYear.innerText = formYear.value
}


const numError = document.getElementById("form__group--number")

const numJS = () => {
    let inputValue = formCardNum.value;
    if (/[a-zA-Z]/.test(inputValue)) {
    formCardNum.style.border = '2px solid red'
    errorNum.classList.remove('hidden')
    return;
    }
    if (!/[a-zA-Z]/.test(inputValue)) {
        formCardNum.style.border = '1px solid #DFDEE0'
        errorNum.classList.add('hidden')
    }
    // format numbers into four digit blocks i.e. 1111 1111 1111 1111
    let formattedValue = inputValue
    .replace(/\D/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
    formCardNum.value = formattedValue;
    cardNum.innerText = formattedValue;
  };

//  end of form validations and updating card images


// on submit click check for empty inputs and give error msg

const submitBtn = document.getElementById("submit__btn")
const form = document.getElementById('form')
const formContainer = document.getElementById('form__container')
const thankyou = document.getElementById('thankyou__container')

let arrayInputs = [formName, formCardNum, formMonth, formYear, formCvc]


const checkInputs = (e) => {
    e.preventDefault();
    let isValid = true;
    for (let input of arrayInputs) {
        if (input.value === "") {
            let errorElement;
            switch (input) {
                case formName:
                    errorElement = errorName;
                    break;
                case formCardNum:
                    errorElement = errorNum;
                    break;
                case formMonth:
                    errorElement = errorDate;
                    break;
                case formYear:
                    errorElement = errorDate;
                    break;
                case formCvc:
                    errorElement = errorCvc;
                    break;
            }
            errorElement.classList.remove("hidden");
            input.style.border = "1px solid var(--Red)";
            isValid = false;
        }
    }
    if (isValid) {
        // form.submit();
        formContainer.classList.add('hidden')
        thankyou.classList.remove('hidden')
    }
};

submitBtn.addEventListener("click", checkInputs);


// Hide Messages and remove red border on focus of input to enter info

const hideError = (e) => {
    let input = e.target;
    let errorElement;
    switch (input) {
        case formName:
            errorElement = errorName;
            break;
        case formCardNum:
            errorElement = errorNum;
            break;
        case formMonth:
            errorElement = errorDate;
            break;
        case formYear:
            errorElement = errorDate;
            break;
        case formCvc:
            errorElement = errorCvc;
            break;
    }
    errorElement.classList.add("hidden");
    input.style.border = "1px solid #DFDEE0";
    return
};

for (let input of arrayInputs) {
    input.addEventListener("focus", hideError);
}

// reset hack for this project only to reload on continue btn click

const continueBtn = document.getElementById('continue')

continueBtn.addEventListener('click', (e) => location.reload())
