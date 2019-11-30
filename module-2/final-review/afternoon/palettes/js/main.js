'use strict';

const elementMain = document.querySelector('main');
const elementInputSearch = document.querySelector('#input-search');
let elementsPaletteName;

//Hago la petición al servidor con fetch
//en el segundo then pinto las paletas y llamo a cada paleta para poder buscarlas
function init(){
  fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
  .then(response => response.json())
  .then(data => {
    paintPaletteHandler(data)
    //llamo aquí a mis divs, dentro de then para asegurarnos que se hayan pintado
    elementsPaletteName = document.querySelectorAll('.palette-name');
  })
}

//PARTE 7 Paletas favoritas
function favourtitesPaletteHandler (event){
  event.currentTarget.classList.toggle('selected')
}

//PARTE 8 Buscar paletas
function searchPaletteHandler (event){
  let inputValue = event.currentTarget.value.toLowerCase();
  for (let singleName of elementsPaletteName){
    if(singleName.innerHTML.toLowerCase().indexOf(inputValue) !== -1){
      singleName.closest('div').classList.remove('hidden');
    } else{
      singleName.closest('div').classList.add('hidden');
    }
  }
}
///

//PINTO VARIAS PALETAS PARTE 6
const paintPaletteHandler = anyData => {
  //Mi array original
  const paletteInfo = anyData.palettes

  for (const singlePalette of paletteInfo){
    const elementDiv = document.createElement('div');
    const elementSpan = document.createElement('span');
    const elementUl = document.createElement('ul');
    elementSpan.innerHTML = singlePalette.name;
    elementSpan.classList.add('palette-name');

    //Mi array con la información de los colores
    const paletteColorInfo = singlePalette.colors;

    for (let color of paletteColorInfo){
      const elementLi = document.createElement('li');
      elementLi.style.backgroundColor = `#${color}`;
      elementUl.appendChild(elementLi)
    }
    //PARTE 7 Paletas favoritas
    elementDiv.addEventListener('click',favourtitesPaletteHandler);
    elementDiv.classList.add('palette-container')
    ///
    elementDiv.appendChild(elementSpan)
    elementDiv.appendChild(elementUl)
    elementMain.appendChild(elementDiv)
  }
}

//añado los listeners
elementInputSearch.addEventListener('keyup',searchPaletteHandler);
window.addEventListener('load',init);

