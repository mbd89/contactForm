

const emailInput = document.querySelector('#email')
const form = document.querySelector('form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const textarea = document.querySelector('#msg')
const textareaError = document.querySelector('#message-validation')
const emailError = document.querySelector('#email-validation')
const radio1 = document.querySelector('#General-Enquiry')
const radio2 = document.querySelector('#Support-Request')
const queryTypeError = document.querySelector('#query-type-validation')
const firstNameError = document.querySelector('#first-name-validation')
const lastNameError = document.querySelector('#last-name-validation')
const consentCheckBox = document.querySelector('#consent')
const consentError = document.querySelector('#consent-validation')
const successMessage = document.querySelector('.success-message')
$('.enquiry').click(function () {
    $(this).find('input:radio')[0].checked = true;
    $('.focused').toggleClass('focused');
    $(this).toggleClass('focused');
});


form.addEventListener('submit', e => {
    e.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const textareaValue = textarea.value.trim();
    const emailValue = emailInput.value.trim();
    if (!isValidEmail(emailValue)) {
        emailError.classList.remove('hidden')
        emailInput.classList.add('error')
    } else if (isValidEmail) {
        emailError.classList.add('hidden')
        emailInput.classList.remove('error')
    }
    if (!firstNameValue) {
        firstNameError.classList.remove('hidden')
        firstName.classList.add('error')
    } else if (firstNameValue) {
        firstNameError.classList.add('hidden')
        firstName.classList.remove('error')
    }
    if (!lastNameValue) {
        lastNameError.classList.remove('hidden')
        lastName.classList.add('error')
    } else if (firstNameValue) {
        lastNameError.classList.add('hidden')
        lastName.classList.remove('error')
    }
    if (!textareaValue) {
        textareaError.classList.remove('hidden')
        textarea.classList.add('error')
    } else if (textareaValue) {
        textareaError.classList.add('hidden')
        textarea.classList.remove('error')
    }

    if (!radio1.checked) {
        if (!radio2.checked) {
            queryTypeError.classList.remove('hidden')
        }
    }
    if (!radio2.checked) {
        if (!radio1.checked) {
            queryTypeError.classList.remove('hidden')
        }

    }
    if (radio1.checked || radio2.checked) {
        queryTypeError.classList.add('hidden')
    }
    if (!consentCheckBox.checked) {
        consentError.classList.remove('hidden')
    }
    if (consentCheckBox.checked) {
        consentError.classList.add('hidden')
    }

    let children = e.target.querySelectorAll('input, textarea');
    // find if any of them are empty
    let findEmpty = Array.from(children).find((element) => {
        if (!element.value.length) {
            return true
        }

        return false
    });

    if (!findEmpty) {
        if (radio1.checked || radio2.checked) {
            if (consentCheckBox.checked) {
                successMessage.classList.remove('hidden')
            }
        }

    }
    else if(findEmpty){
        successMessage.classList.add('hidden')
    }


})



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


