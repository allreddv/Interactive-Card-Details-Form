
// variables for checking if all form inputs are valid and updating DOM

const formName = document.getElementById("form__name")
const cardName = document.getElementById("card__front--name")

const formCardNum = document.getElementById("form__card_number")
const cardNum = document.getElementById("card__front--num")

const formCvc = document.getElementById("form__cvc")
const cardCvc = document.getElementById('cvc')

const formMonth = document.getElementById("form__month")
const cardMonth = document.getElementById('card__month')

const formYear = document.getElementById('form__year')
const cardYear = document.getElementById("card__year")




// Update in realtime the form inputs into the card image

const nameJS = () => {
    cardName.innerText = formName.value
}

const cvcJS = () => {
    cardCvc.innerText = formCvc.value
}


const monthJS = () => {
    let inputValue = formMonth.value
     // Check if the input value contains any letters
    if (/[a-zA-Z]/.test(inputValue) || inputValue > 12) {
        // Show error message
        console.error("Error: Must enter valid Month");
        return;
    }
    cardMonth.innerText = formMonth.value
}

const yearJS = () => {
    let inputValue = formYear.value
    // Check if the input value contains any letters
   if (/[a-zA-Z]/.test(inputValue) || inputValue < 23) {
       // Show error message
       console.error("Error: Must enter valid year");
       return;
   }
    cardYear.innerText = formYear.value
}

const numJS = () => {
    let inputValue = formCardNum.value;
    // Check if the input value contains any letters
    if (/[a-zA-Z]/.test(inputValue)) {
      // Show error message
    console.error("Error: Only digits are allowed in the card number");
    return;
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



