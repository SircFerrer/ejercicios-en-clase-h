'use strict';

const inputNumber = document.querySelector('.js-input-number');
const inputSubmit = document.querySelector('.js-input-submit');
const feedback = document.querySelector('.js-feedback');
const counter = document.querySelector('.js-counter');

let count = 0;

// random number

function generateRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = generateRandomNumber(100);

// handle button

function handleButton(ev) {
  ev.preventDefault();
  compareUserNumber();
  incCounter();
}

// feedback

function compareUserNumber() {
  const inputNumberValue = parseInt(inputNumber.value);
  if (inputNumberValue < 1 || inputNumberValue > 100) {
    updateFeedback('El número debe estar entre 1 y 100');
  } else if (inputNumberValue === randomNumber) {
    updateFeedback('Has ganado');
  } else if (inputNumberValue > randomNumber) {
    updateFeedback('Demasiado alto');
  } else if (inputNumberValue < randomNumber) {
    updateFeedback('Demasiado bajo');
  }
}

function updateFeedback(text) {
  feedback.innerHTML = text;
}

// counter

function incCounter() {
  count += 1;
  counter.innerHTML = count;
}

// listen events

inputSubmit.addEventListener('click', handleButton);

console.log('El número aleatorio es: ' + randomNumber);
