'use strict';

//PASO 1 --> Accedo a los elementos
const elementInputNumber = document.querySelector('#user-number');
const elementButton = document.querySelector('#try-number-button');
const elementClueText = document.querySelector('#user-clue');
const elementAttemps = document.querySelector('#user-attemps');

//PASO 2 --> Creo las variables que voy a necesitar, una para que me cuente el número de intentos (attemps) y el número máximo de mi rango de números aleatorios
let attemps = 0;
const maxNumber = 100;

//PASO 3 --> De partida el contenido de mi HTML será el número de intentos, con lo cual será 0
elementAttemps.innerHTML = attemps;

//PASO 5 --> El ejercicio me dice que mi app generará un número aleatorio, con lo cual necesito una función que me proporcione ese número y guardarlo en una constante.
const getRandomNumber = max => Math.ceil(Math.random() * max)
const randomNumber = getRandomNumber(maxNumber);

//PASO 6 --> Necesito una función que incremente los intentos
const increaseAttemps = () => {
  //incremento el valor de attemps con cada click y lo pinto de nuevo en el html
  attemps++;
  elementAttemps.innerHTML = attemps;
}

//PASO 7--> Ahora que tengo el número aleatorio creo la función que chequeará el valor de lo que le llega por el input con el número aleatorio generado
const checkUserNumber = () => {
  //primero valido si lo que entra es correcto
  if(elementInputNumber.value > maxNumber || elementInputNumber.value === '' || elementInputNumber.value <= 0){
    elementClueText.innerHTML = 'El número debe de estar entre 1 y 100';
  } else if (elementInputNumber.value > randomNumber){
    elementClueText.innerHTML = 'El número es demasiado alto';
  } else if(elementInputNumber.value < randomNumber) { 
    elementClueText.innerHTML = 'El número es demasiado bajo';
  } else {
    elementClueText.innerHTML = 'HAS GANADO CAMPEONA';
  }
}

console.log(randomNumber)

//PASO 8 ---> Añado en mi función manejadora la función que incrementa el contador con cada click y la función que comprueba el número del usuario con el generado en random
function eventClickHandler(){
  increaseAttemps();
  checkUserNumber();
}

//PASO 4 --> Añado el listener al botón con la función manejadora
elementButton.addEventListener('click',eventClickHandler);