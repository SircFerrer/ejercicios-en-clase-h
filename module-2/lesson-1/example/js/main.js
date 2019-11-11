'use strict';

// get numberAElement dom element
const numberAElement = document.querySelector('.js-number-a');
// get numberBElement dom element
const numberBElement = document.querySelector('.js-number-b');
// get resultElement dom element
const resultElement = document.querySelector('.js-result');

const sum = function() {
  // get numberAElement value
  let numberAValue = numberAElement.value;
  // parse string value to number value
  numberAValue = parseInt(numberAValue);

  // get numberBElement value
  let numberBValue = numberBElement.value;
  // parse string value to number value
  numberBValue = parseInt(numberBValue);

  // add values
  const resultValue = numberAValue + numberBValue;
  // check resultElement
  if (isNaN(resultValue)) {
    resultElement.value = 'Datos inválidos';
  } else {
    // set resultElement value in resultElement input element
    resultElement.value = resultValue;
  }
};

// listen changes in numberAElement input
numberAElement.addEventListener('change', sum);
// listen changes in numberAElement input
numberBElement.addEventListener('change', sum);
