/* eslint-disable no-console */
'use strict';

const container = document.querySelector('.js-container');
const linkAdalab = document.querySelector('.js-link-adalab');
const linkGoogle = document.querySelector('.js-link-google');

// container

const handleContainerClick = ev => {
  console.log('handleContainerClick: el elemento pulsado es', ev.target);
  console.log('handleContainerClick: el elemento escuchado es', ev.currentTarget);
  ev.preventDefault();
};

container.addEventListener('click', handleContainerClick);

// links

const handleLinkClick = ev => {
  console.log('handleLinkClick: el elemento pulsado es', ev.target);
  console.log('handleLinkClick: el elemento escuchado es', ev.currentTarget);

  ev.preventDefault(); // des/comentar esta linea a ver qué pasa
  // ev.stopPropagation(); // des/comentar esta linea a ver qué pasa
};

linkAdalab.addEventListener('click', handleLinkClick);

linkGoogle.addEventListener('click', handleLinkClick);
