import _throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const btn = document.querySelector('button');

const data = {
    email: null,
    message: null
    }

emailInput.addEventListener('input', _throttle(function (event) {
    data.email = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}, 500))
messageInput.addEventListener('input', _throttle(function (event) {
    data.message = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}, 500 ))
btn.addEventListener('click', (event) => {
    emailInput.value = '';
    messageInput.value = '';
    console.log(emailInput.value);
    console.log(messageInput.value);
})

window.onload = function() {
    const prevResult = localStorage.getItem('feedback-form-state');
    const parsedResult = JSON.parse(prevResult);
    console.log(parsedResult);
    if (localStorage === null) {
        emailInput.value = null;
        messageInput.value = null;
    }
    else {
        emailInput.value = parsedResult.email;
        messageInput.value = parsedResult.message;
    }
    
}