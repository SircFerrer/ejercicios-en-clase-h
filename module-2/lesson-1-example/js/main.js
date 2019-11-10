'use strict';

// get numberA dom element
const numberA = document.querySelector('.js-number-a');
// get numberB dom element
const numberB = document.querySelector('.js-number-b');
// get result dom element
const result = document.querySelector('.js-result');

const sum = function() {
  // get numberA value
  let numberAValue = numberA.value;
  // parse string value to number value
  numberAValue = parseInt(numberAValue);

  // get numberB value
  let numberBValue;
  numberBValue = numberB.value;
  // parse string value to number value
  numberBValue = parseInt(numberBValue);

  // add values
  const resultValue = numberAValue + numberBValue;
  // check result
  if (isNaN(resultValue)) {
    result.value = 'Datos inválidos';
  } else {
    // set result value in result input element
    result.value = resultValue;
  }
};

// listen changes in numberA input
numberA.addEventListener('change', sum);
// listen changes in numberA input
numberB.addEventListener('change', sum);
