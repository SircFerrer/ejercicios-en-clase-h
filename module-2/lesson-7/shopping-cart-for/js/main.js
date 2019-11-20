'use strict';

const elementWrapperCart = document.querySelector('#my-cart');
const elementProductList = document.querySelector('#product-list');
const products = [
  {
    name:'Peras',
    price:3
  },
  {
    name:'Filetes de ternera',
    price:9
  },
  {
    name:'Galletas Dinosaurios',
    price:2
  },
  {
    name:'Pizza barbacoa',
    price:2.5
  }
]

function increaseProductQuantity() {
  let productQuantity = parseInt(elementWrapperCart.innerHTML);
  productQuantity = productQuantity + 1;
  elementWrapperCart.innerHTML = productQuantity;
}

// const displayProductList = () => {
//   for (let product of products) {
//     const elementLi = document.createElement('li');
//     const elementSpan = document.createElement('span');
//     const elementButton = document.createElement('button');
    
//     elementButton.setAttribute('type','button');
//     elementButton.addEventListener('click',addToCart);
//     elementButton.innerHTML = 'Comprar'

//     elementSpan.innerHTML = `${product.name} ${product.price}€`;
//     elementLi.appendChild(elementSpan);
//     elementLi.appendChild(elementButton);
//     elementProductList.appendChild(elementLi);
//   }
// }

const displayProductList = () => {
  for (let i = 0; i < products.length; i++) {
    const elementLi = document.createElement('li');
    const elementSpan = document.createElement('span');
    const elementButton = document.createElement('button');
    
    elementButton.setAttribute('type','button');
    elementButton.addEventListener('click',addToCart);
    elementButton.innerHTML = 'Comprar'

    elementSpan.innerHTML = `${products[i].name} ${products[i].price}€`;

    elementLi.appendChild(elementSpan);
    elementLi.appendChild(elementButton);
    elementProductList.appendChild(elementLi);
  }
}

// function displayPopUp(myProduct) {
//   alert(`Has añadido ${myProduct} a tu cesta`);
//   increaseProductQuantity();
// }

const displayPopUp = myProduct => {
  alert(`Has añadido ${myProduct} a tu cesta`);
  increaseProductQuantity();
}

function addToCart(event){
  const product = event.target.previousElementSibling.innerHTML;
  displayPopUp(product);
}

window.addEventListener('load',displayProductList);