'use strict';

/////PASO 1///////
//accedo a los elementos
const elementButton = document.querySelector('#update-button');
const elementSelect = document.querySelector('#mood');
const elementFace = document.querySelector('#face');
const elementMain = document.querySelector('#main');
//////

//////PASO 4//////
//¿cuántas funciones tiene mi aplicación según las acciones que me dice el enunciado a parte de la función manejadora del evento?
//2---obtener número aleatorio, cambiar el color del fondo

//FUNCIÓN obtengo número aleatorio entre 0 y 100
const getRandomNumber = (max) => Math.round(Math.random() * max);

//FUNCIÓN cambio el color de fondo pasándole mi número aleatorio como parámetro
//para poder hacer el condicional
const changeBackground = (number) => {
  if(number%2 !== 0){
    elementMain.classList.add('angry');
  } else {
    elementMain.classList.remove('angry');
  }
}
////////////

///PASO 3/////
//Creo mi función manejadora del evento ¿que acciones ejecutará?¿Necesito más funciones que hagan cosas para trabajar con ellas dentro de ella? SÍ //PASO 4
function updateMood() {
  //cuando pulse update cambio el estado de la carita principal
  elementFace.innerHTML = elementSelect.value;
  //genero un número aleatorio
  const randomNumber = getRandomNumber(100);
  //ejecuto la función cambiar color de fondo en función del número aleatorio que recibe como argumento
  changeBackground(randomNumber);
}
////////////

////PASO 2////
//Añado los listener en los elementos que necesito
elementButton.addEventListener('click',updateMood);
////////////

console.log('¡¡Ánimo con JS!! 💪')