'use strict';

//accedo hasta los elementos que voy a manejar
const elementUserInput = document.querySelector('#user-name');
const elementEmailInput = document.querySelector('#user-email');
const elementButton = document.querySelector('#send-button');
const elementWrapperUser = document.querySelector('#wrapper-user');
const elementWrapperEmail = document.querySelector('#wrapper-email');

//función de envio de información
function sendInfo () {
  //creo un booleano para controlar si mi formulario tiene errores
  let hasErrors = false;

  //¿está vacío mi nombre? SI? pues añado la clase error y el booleano cambia su estado
  if(elementUserInput.value === ''){
    elementWrapperUser.classList.add('error');
    hasErrors = true;
  }

  //¿está vacío mi email? SI? pues añado la clase error y el booleano cambia su estado
  if(elementEmailInput.value === ''){
    elementWrapperEmail.classList.add('error');
    hasErrors = true;
  }

  //¿mi booleano es distinto de true? es decir, es false mi formulario no tiene errores? pues borror las clases error, envío los datos.
  if(hasErrors !== true) {
    elementWrapperEmail.classList.remove('error');
    elementWrapperUser.classList.remove('error');
    alert('Datos enviados');
  }
  
  //reseteo el valor inicial de mi booleano
  hasErrors = false;
}

elementButton.addEventListener('click',sendInfo);