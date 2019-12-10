/* eslint-disable no-console */
'use strict';

const languages = [
  {
    name: 'html',
    frontEnd: true
  },
  {
    name: 'css',
    frontEnd: true
  },
  {
    name: 'node',
    frontEnd: false
  },
  {
    name: 'js',
    frontEnd: true
  }
];

// Función común para filter y para for

const isFrontEndLanguage = function (language) {
  console.log(`Comprobando si ${language.name} es un lenguaje de front-end: ${language.frontEnd}`);
  return language.frontEnd;
};

// Ejercicio resuelto con foreslint.nodePath
// Aquí somos nosotros los que iteramos el for, nosotros ejecutamos la función isFrontEndLanguage y nosotros pusheamos en el array aquellos lenguajes que sí son de front

const languagesWithForIterator = [];

for (const language of languages) {
  if (isFrontEndLanguage(language) === true) {
    languagesWithForIterator.push(language);
  }
}

console.log('languagesWithForIterator', languagesWithForIterator);

// Ejercicio resuelto con el método filter
// Aquí es JavaScript quien itera los lenguajes y los mete en el array. Nosotros solo tenemos que decirle el método que necesita para saber si cada lenguaje pasa el filtro o no
// JS ejecuta 4 veces el método isFrontEndLanguage

const languagesWithFilterMethod = languages.filter(isFrontEndLanguage);

console.log('languagesWithFilterMethod', languagesWithFilterMethod);

// No hay nada mejor para entender cómo funciona una función nativa de JS como intentar progamarla tú
// Aquí, con el for...of hemos progamado un filter
// Te recomendamos que intentes programar los métodos map, find, findIndex y reduce