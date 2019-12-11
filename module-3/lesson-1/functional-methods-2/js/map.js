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

//Ahora queremso pintar cada uno de los elementos de nuestra lista de la compra en el DOM.
const ul = document.querySelector('ul');

const createDOMElement = ingredient => {
  const li = document.createElement('li');
  li.innerHTML = ingredient.name;
  ul.appendChild(li);
}


shoppingList.map(createDOMElement)

// for(const ingredient of shoppingList) {
//   createDOMElement(ingredient)
// }