'use strict';

const elementsButtons = document.querySelectorAll('.add-to-cart');
const elementWrapperCart = document.querySelector('#my-cart');

function increaseProductQuantity() {
  let productQuantity = parseInt(elementWrapperCart.innerHTML);
  productQuantity = productQuantity + 1;
  elementWrapperCart.innerHTML = productQuantity;
}


function displayProducts(myProduct) {
  alert(`Has añadido ${myProduct} a tu cesta`);
  increaseProductQuantity();
}


function addToCart(event){
  // console.log('hola')
  const product = event.target.previousElementSibling.innerHTML;
  displayProducts(product);
}



elementsButtons.forEach(function(elementButton){
  elementButton.addEventListener('click',addToCart)
})