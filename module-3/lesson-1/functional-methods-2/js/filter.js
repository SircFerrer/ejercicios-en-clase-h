'use strict';

const shoppingList = [
  {
    name: 'Filetes',
    isVegetable: false,

  },
  {
    name: 'Puerros',
    isVegetable: true
  },
  {
    name: 'Manzanas',
    isVegetable: true
  },
  {
    name: 'Leche',
    isVegetable: false
  },
  {
    name: 'Huevos',
    isVegetable: false
  }
];

//Queremos hacer una app en la que podamos quedarnos solo con aquellos ingredientes que podamos usar en un plato vegetariano dada una lista de la compra.

//////////------SOLUCIÓN CON BUCLE FOR-----///////////

//Crearíamos un array vacío
let vegetableList = []

//Haríamos una función que se quedara con el valor de la propiedad isVegetable, para comprobar si es vegetal o no
// const isVegetable = function (ingredient) {
//  return ingredient.isVegetable
// }

const isVegetable = ingredient => ingredient.isVegetable;

//Recorreríamos nuestro array de objetos y en el if chequearíamos si el valor que nos devuelve la propiedad isVegetable es tru o false, en caso positivo haríamos push a nuestro array vacío de ingredientes vegetales
for (const ingredient of shoppingList) {
  if(isVegetable(ingredient) === true) {
    vegetableList.push(ingredient);
  }
}
console.log(vegetableList)

//////////------SOLUCIÓN CON FILTER-----///////////

//Creamos la variable en la que se guardará el array generado por filter automáticamente con los resultados filtrados
const vegetableListFilter = shoppingList.filter(isVegetable);

console.log(vegetableListFilter)