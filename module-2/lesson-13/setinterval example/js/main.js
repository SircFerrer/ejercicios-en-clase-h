'use strict';

const printDate = () => {
  const date = new Date();
  console.log('Son las', date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getMilliseconds());
};

console.log('Se ejecuta esta línea.');
setInterval(printDate);
console.log('Y la siguiente que se ejecuta es esta, y dentro de un segundo se ejecutará la de la función printDate.');
