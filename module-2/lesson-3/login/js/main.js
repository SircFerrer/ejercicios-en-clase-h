'use strict';

const elementUserInput = document.querySelector('#user-name');
const elementPassInput = document.querySelector('#user-password');
const elementButton = document.querySelector('#login-button');
const elementErrorWrapper = document.querySelector('.error-wrapper');

const userName = 'pixelmary';
const userPassword = 'bicicleta';
let attemps = 0;

// const increaseAttemps = () => attemps < 3 ? attemps++ : console.log('estas bloqueado')

function increaseAttemps() {
  if(attemps < 3){
    attemps++
  }else{
    console.log('estas bloqueado')
  }
}


function login () {
  if(elementUserInput.value === userName && elementPassInput.value === userPassword) {
    elementErrorWrapper.classList.add('hidden');
    alert('Estás dentro');
  } else {
    increaseAttemps();
    elementErrorWrapper.classList.remove('hidden');
  }
}

elementButton.addEventListener('click',login);