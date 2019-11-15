'use strict';

//comida me viene de una BBDD
const foodList = ["Spaguettis", "Samosas ricas", "Pizza con mucho queso"];

//accedo a los elementos
const elementCloseButton = document.querySelector('#close-pop-up');
const elementPopUpWrapper = document.querySelector('#overlay');
const elementListUl = document.querySelector('#food-list');

/////////////lista dinámica////////////
///IGNORAR DE MOMENTO ESTO PERO ENTENDER EL CONTEXTO
//con este for queremos simular que los LI se nos generan a partir del contenido de una base de datos
//por lo tanto no están en el DOM físicamente, se generan de forma dinámica
//esto hará que los botones de pedir plato tampoco estén presentes de partida
//nos generará un error al intentar asignarle un addEventListener --> null
for (let i=0; i < foodList.length; i++){
  let listItem = document.createElement('li');
  listItem.innerHTML = `${foodList[i]} <button class="add-to-cart">Pedir este plato</button>`
  elementListUl.appendChild(listItem);
}

//función que muestra el popup después de 2 segundos
function displayPopUp(){
  //NO PREOCUPARSE SI NO SE ENTIENDE ya llegaremos, es para ver como ocurre el evento load con retardo
  setTimeout(
    function() {
      elementPopUpWrapper.classList.remove('hidden');
    },500
  )
}

//cierro el pop up
function closePopUp(){
  elementPopUpWrapper.classList.add('hidden');
}

//la ventana está escuchando cuando el DOM termina de cargarse, después lanza el popup
window.addEventListener('load', displayPopUp);
//el botón está escuchando cuando el usuario hace click
elementCloseButton.addEventListener('click',closePopUp)

//asigno el listener a document que es la madre de todos, a partir de ella el evento se propagará hasta finalmente encontrar algún elemento que contenga la clase add-to-cart, cuando lo encuentre ejecutará la acción
document.addEventListener('click',addToCart);

function addToCart(event){
  if(event.target.classList.contains('add-to-cart')) {
		alert('Plato añadido a tu pedido');
	}
}

//al no existir el botón no puedo asignarle el listener, NO EXISTE EN EL DOM
// elementDinamicButton.addEventListener('click',addToCart)
