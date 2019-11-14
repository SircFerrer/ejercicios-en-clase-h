'use strict';

//accedo a los elementos que voy a manejar
const elementsButtons = document.querySelectorAll('.add-to-cart');
const elementWrapperCart = document.querySelector('#my-cart');

//función que añade producto a la cesta, toma el nombre del producto y se lo paso como argumento a la función displayProducts
function addToCart(event) {
  //en esta línea me quedo con el valor de la etiqueta hermana superior o previousElementSibling
  const product = event.target.previousElementSibling.innerHTML;
  //ahora que tengo el nombre del producto se lo paso como argumento a mi función displayProducts
  displayProducts(product);
}

//función que me dice el nombre del producto que he añadido a la cesta, se lo paso como parámetro, puedo poner myProduct o cualquier nombre que se me ocurra con sentido
function displayProducts(myProduct) {
  alert(`has añadido ${myProduct} a las cesta`);
  //ahora llamo a la función que incrementa los productos de mi cesta
  increaseProductQuantity();
}

//función que añade un producto más a la cesta
function increaseProductQuantity(){
  let productQuantity = parseInt(elementWrapperCart.innerHTML);
  productQuantity = productQuantity + 1;
  elementWrapperCart.innerHTML = productQuantity;
}

//NO PREOCUPARSE SI NO ENTIENDO ESTO YA LO VEREMOS, estoy asignando el eventLIstener a cada uno de los botones de añadir al carrito para que pueda hacer click en todos
elementsButtons.forEach(function(elementButton) {
  elementButton.addEventListener('click', addToCart);
});

