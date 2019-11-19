'use strict';

const inputPassword = document.querySelector('.js-input-password');
const inputEmail = document.querySelector('.js-input-email');
const formData = {};

const setFormData = ev => {
  // esta función es genérica, la función no sabe si está guardando en formData el valor del email o de la contraseña
  const input = ev.target; //asi no tengo que escribir todo el rato ev.target
  const inputName = input.name;
  const inputValue = input.value;
  formData[inputName] = inputValue;
  console.log('Datos del formulario:', formData);
};

inputPassword.addEventListener('keyup', setFormData);
inputEmail.addEventListener('keyup', setFormData);
