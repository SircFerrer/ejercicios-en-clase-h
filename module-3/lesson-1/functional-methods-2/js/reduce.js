'use strict';

const personList = [
  {
    name: 'Pilar',
    surname:'Pérez',
    isGirl: true
  },
  {
    name: 'Luis',
    surname:'Sánchez',
    isGirl: false
  },
  {
    name: 'Sonia',
    surname:'García',
    isGirl: true
  }
];

const span = document.querySelector('span');

//Con el método reduce partimos de un array pero el resultado final es un valor único.
//Siempre tiene que tener un acumulador (acc) que será el que almacene el valor y otro parámetro que será el que itere. //Reduce almacena en el acumulador el resultado de las iteraciones y devuelve el resultado final

//MÉTODO TRADICIONAL
//Aquí reduce vale un número, el total de las chicas de mi lista
// let girlsCounter = personList.reduce((acc,person) => {
//     if(person.isGirl === true){
//       return acc + 1
//     } else{
//       return acc
//     }
//   },0)

//console.log(typeof(girlsCounter))
// span.innerHTML = `${girlsCounter} chicas en mi lista`

///-----------------------------------------------------------------///

//Aquí reduce vale un string con los nombres de las chicas
// let girlsName = personList.reduce((acc,person) => {
//   if(person.isGirl === true){
//     return `${acc} ${person.name} ${person.surname}<br>`
//   } 
//   else {
//     return `${acc}`
//   }
// },'')


//Mismo ejemplo anterior reescrito
const isGirl = (acc,person) => person.isGirl === true ? `${acc} ${person.name} ${person.surname}<br>`:`${acc}`

let girlsName = personList.reduce(isGirl,'')

console.log(typeof(girlsName));
console.log(girlsName)

span.innerHTML = `${girlsName}`
