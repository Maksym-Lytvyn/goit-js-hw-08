import _throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form');
console.log(form);
const submit = document.querySelector('button');

const data = {
    email: '',
    message: ''
    }

form.addEventListener('input', _throttle(function (event) {
    data.email = emailInput.value;
    data.message = messageInput.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}, 500))


submit.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(emailInput.value);
    console.log(messageInput.value);
    emailInput.value = '';
    messageInput.value = '';
    localStorage.clear();
})

window.onload = function() {
    const prevResult = localStorage.getItem('feedback-form-state');
    const parsedResult = JSON.parse(prevResult);
    console.log(parsedResult);
    if (localStorage === '') {
        emailInput.value = '';
        messageInput.value = '';
    }
    else {
        emailInput.value = parsedResult.email;
        messageInput.value = parsedResult.message;
    }
    
}