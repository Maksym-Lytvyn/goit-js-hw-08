 import _throttle from 'lodash.throttle';

 const emailInput = document.querySelector('input[name="email"]');
 const messageInput = document.querySelector('textarea[name="message"]');
 const form = document.querySelector('form');
 console.log(form);
 const LOCAL_KEY = 'feedback-form-state';

 const data = {
     email: '',
     message: ''
    }

 form.addEventListener('input', _throttle(function (event) {
     data.email = emailInput.value;
     data.message = messageInput.value;
     localStorage.setItem(LOCAL_KEY, JSON.stringify(data))
 }, 500))

 function clearStorage(){
    localStorage.removeItem(LOCAL_KEY);
 }

 form.addEventListener('submit', (event) => {
     event.preventDefault();
     console.log(localStorage.getItem(LOCAL_KEY));
     event.currentTarget.reset();
     clearStorage();
 })

 window.onload = function() {
     const prevResult = localStorage.getItem(LOCAL_KEY);
     const parsedResult = JSON.parse(prevResult);
     console.log(parsedResult);
     if (parsedResult) {
         emailInput.value = parsedResult.email;
         messageInput.value = parsedResult.message;
     }
    
 }

