'use strict';

//accedo a los elementos del formulario
const elementButtonSignIn = document.querySelector('#sign-in-btn');
const elementFormUserName = document.querySelector('#user-name');
const elementFormUserSurname = document.querySelector('#user-surname');
const elementFormUserAge = document.querySelector('#user-age');

//accedo a otros divs -- overlay y los listados
const elementWrapperOverlay = document.querySelector('.overlay');
const elementFirstAgeRank = document.querySelector('#first-age-rank');
const elementSecondAgeRank = document.querySelector('#second-age-rank');
const elementThirdAgeRank = document.querySelector('#third-age-rank');

//accedo a los divs que van a rellenarse con el formulario
const elementResultsUserName = document.querySelector('#results-user-name');
const elementResultsUserAge = document.querySelector('#results-user-age');

//FUNCIÓN DE SIGN IN
//me quedo con el value de los inputs name y surname
//me quedo con el value del select
//añado la clase hidden al overlay para ocultarlo
//ejecuto la función displayForm que recibe los argumentos de userName,userSurname y userAge
const signIn = () => {
  const userName = elementFormUserName.value;
  const userSurname = elementFormUserSurname.value;
  const userAge = elementFormUserAge.value;
  elementWrapperOverlay.classList.add('hidden');
  displayForm(userName,userSurname,userAge);
}

//FUNCIÓN DE PINTAR LOS LISTADOS
//recibe tres parámetros que le llegan a través de la función de arriba
//pinto el nombre y el apellido
//pinto la edad
//creo un condicional para ver en cada caso que listado debo mostrar en función de la edad del usuario que recibe por parámetro
const displayForm = (a,b,c) => {
  elementResultsUserName.innerHTML = `${a} ${b}`;
  elementResultsUserAge.innerHTML = c;

  if(c === 'De 18 a 30') {
    elementFirstAgeRank.classList.remove('hidden');
  } else if (c === 'De 31 a 50') {
    elementSecondAgeRank.classList.remove('hidden');
  } else {
    elementThirdAgeRank.classList.remove('hidden');
  }
}

//asigno el listener al botón
elementButtonSignIn.addEventListener('click',signIn);