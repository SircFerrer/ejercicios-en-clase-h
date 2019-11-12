'use strict';

const age = document.querySelector('.js-age');
const resultStop = document.querySelector('.js-result-stop');
const resultGo = document.querySelector('.js-result-go');

const showMessage = function () {
  const ageValue = parseInt(age.value);

  resultGo.classList.add('hidden');
  resultStop.classList.add('hidden');

  if (ageValue >= 18) {
    resultGo.classList.remove('hidden');
  } else {
    resultStop.classList.remove('hidden');
  }
};

age.addEventListener('change', showMessage);
