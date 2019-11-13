'use strict';

//accedo hasta los elementos que voy a manejar
const elementUserInput = document.querySelector('#user-name');
const elementPassInput = document.querySelector('#user-password');
const elementButton = document.querySelector('#login-button');
const elementErrorWrapper = document.querySelector('.error-wrapper');

//declaro el valor de mi usuario y contraseña
const userName = 'pixelmary';
const userPassword = 'bicicleta';

//función de login 
function login () {

  //¿coinciden los valores de usuario y contraseña con los valores que he declarado?
  if(elementUserInput.value === userName && elementPassInput.value === userPassword) {
    //SI coinciden, guay, puedo entrar, por si viniera de un error me aseguro que mi error tiene la clase hidden
    elementErrorWrapper.classList.add('hidden');
    alert('Estás dentro');
  } else {
    //EN LOS DEMÁS CASOS, no puedo entrar, algo falla muestro mi párrafo de error quitándole la clase hidden
    elementErrorWrapper.classList.remove('hidden');
  }
}

elementButton.addEventListener('click',login);