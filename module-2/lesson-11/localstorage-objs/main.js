'use strict';

//En este ejercicio de Pokemon guardo un listado de mis pokemons vistos
const elementUl = document.querySelector('#pokemon-list');
const buttonSearch = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const pokemonInfo = document.querySelector('#pokemon-info');
const myPokemons = document.querySelector('#my-pokemons ul');
const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
let lastVisitedList = [];

//Como me conecto a la API dos veces hago una función para ello
const connectToAPI = (url,myCallback) => {
  fetch(url)
  .then(response => response.json())
  .then(dataFromResponse =>  myCallback(dataFromResponse))
}

function loadPokemonHandler() {
  //Leo mi localstorage la primera vez
  const mylocalStorage = localStorage.getItem("lastVisited");

  //esta vacío mi localstorage?
  if(mylocalStorage !== null) {
    lastVisitedList = JSON.parse(mylocalStorage);
  }
  paintList(lastVisitedList);
  connectToAPI(urlBase,renderPokemons);
}

//PInto los Pokemons
const renderPokemons = (pokemonArray) => {
  let myArray = pokemonArray.results
  for(const pokemon of myArray){
    const liElement = document.createElement('li');
    const imgElement = document.createElement('img');
    const spanElement = document.createElement('span');
    const spanContent = document.createTextNode(pokemon.name);
    imgElement.src = `http://pokestadium.com/sprites/xy/${pokemon.name}.gif`;
    spanElement.appendChild(spanContent);
    liElement.appendChild(imgElement);
    liElement.appendChild(spanElement);
    elementUl.appendChild(liElement);
  }
}


const renderPokemonResults = (dataFromSearch) => {
    elementUl.innerHTML = '';
    pokemonInfo.innerHTML = '';
    const nameFromInput = searchInput.value.toLowerCase();
    const imgElement = document.createElement('img');
    const spanElement = document.createElement('span');
    const spanContent = document.createTextNode(dataFromSearch.name);

    imgElement.src = `http://pokestadium.com/sprites/xy/${nameFromInput}.gif`;

    spanElement.appendChild(spanContent);
    pokemonInfo.appendChild(imgElement);
    pokemonInfo.appendChild(spanElement);

    // lleno mi localstorage
    //creo un objeto json con nombre y foto
    const pokemonObject = {
      "name" : dataFromSearch.name.toLowerCase(),
      "img" : imgElement.src
    }

    //pusheo el objeto a mi array vacío
    lastVisitedList.push(pokemonObject);

    //pinto el pokemon como mi función que pinta pokemons 
    addNewVisited(pokemonObject);

    //vuelvo a setear mi localstorage pasandolo por stringify
    localStorage.setItem('lastVisited',JSON.stringify(lastVisitedList));
}

//Función que busca pokemons
function searchPokemonHandler() {
  connectToAPI(urlBase + searchInput.value.toLowerCase(),renderPokemonResults)
}


//PInto lista de pokemons
const paintList = (array) => {
  for(let item of array) {
    addNewVisited(item)
  }
}

//Añado nuevo pokemon visto, recibe como parámetro un objeto
const addNewVisited = (obj) => {
    myPokemons.innerHTML += `<span>${obj.name}</span><img src=${obj.img}>`
}

buttonSearch.addEventListener('click',searchPokemonHandler);
window.addEventListener('load',loadPokemonHandler);
