import _throttle from 'lodash.throttle';

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('button');

const data = {
    email: '',
    message: ''
    }



emailInput.addEventListener('input', _throttle(function (event) {
    data.email = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}, 500))
messageInput.addEventListener('input', _throttle(function (event) {
    data.message = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}, 500 ))
form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailInput.value = '';
    messageInput.value = '';
    console.log(emailInput.value);
    console.log(messageInput.value);
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