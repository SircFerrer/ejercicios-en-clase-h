'use strict';

//En este ejercicio me conecto a la API de Pokémon para pintar un listado de Pokemons, los guardo en localstorage para que si es la segunda vez que me conecto los pinte desde mi localstorage y no volver a hacer una petición al servidor

//LLamo a mis elementos
const elementUl = document.querySelector('#pokemon-list');
const buttonSearch = document.querySelector('#search-button');
const searchInput = document.querySelector('#search-input');
const pokemonInfo = document.querySelector('#pokemon-info');
const elementForm = document.querySelector('#search-form');

//Creo un array vacío para guardar mis pokemos en localstorage
let allPokemonsCached = [];

//URL base de me aplicación
const urlBase ='https://pokeapi.co/api/v2/pokemon?&limit=964'

//1---> Función que se ejecuta al inicio
//INIT
function init() {
  getAllPokemon();
}

//2---->He creado una función por la que le paso una url y una función para conectarme a la API
//Conecto APIREST
const connectToAPI = (url,myCallback) => {
  fetch(url)
  .then(response => response.json())
  .then(dataFromResponse =>  myCallback(dataFromResponse))
  .catch(error => console.log(error))
}

//3--->Primero miro a ver si localstorage está vacío, si es distinto de null entonces está lleno por lo que prseo mi localstorage y pinto los poekmons de ahí, hago console log para que se vea que los datos se pintan desde mi localstorage. En caso de que mi caché este vacío entonces sí me conecto a la API y ejecuto la función que los guardará en local
//Me traigo los Pokemons
const getAllPokemon = () => {
  if( localStorage.getItem("allPokemons")
  !== null) {
    allPokemonsCached = JSON.parse(localStorage.getItem("allPokemons"));
    renderPokemons(allPokemonsCached);
    console.log('vengo de la cache')
  } else {
    connectToAPI(urlBase,saveIntoLocal);
    console.log('vengo de la api')  
  }
}


//4--->Esta función es llamada desde la conexión a la API, se trae los resultados y los guarda en localstorage, una vez los ha guardado los pinta
//Guardo los datos en local si localstorage está vacío
const saveIntoLocal = (results) => {
  const array = results.results;
  localStorage.setItem("allPokemons",JSON.stringify(array));
  allPokemonsCached = JSON.parse(localStorage.getItem("allPokemons"))
  renderPokemons(allPokemonsCached);
}

//5--->PInto los pokemons, función que recibe un array y pinta su contenido
const renderPokemons = (myArray) => {
  for(let pokemon of myArray){
    const liElement = document.createElement('li');
    const imgElement = document.createElement('img');
    const spanElement = document.createElement('span');
    const spanContent = document.createTextNode(pokemon.name);
    liElement.classList.add('pokemon');
    imgElement.src = `http://pokestadium.com/sprites/xy/${pokemon.name}.gif`;
    spanElement.appendChild(spanContent);
    liElement.appendChild(imgElement);
    liElement.appendChild(spanElement);
    elementUl.appendChild(liElement);
  }
}

//6--->Busco Pokemons, se ejecuta cuando doy al botón buscar
function searchPokemonHandler(){
  const elementsPokemon = document.querySelectorAll('.pokemon span');
  const inputValue = searchInput.value.toLowerCase();
  
  for(let elementPokemon of elementsPokemon) {
    if(elementPokemon.innerHTML.indexOf(inputValue) !== -1){
      elementPokemon.closest('li').classList.remove('hidden');
    } else {
      elementPokemon.closest('li').classList.add('hidden');
    }
  }
}

//7--->Al pulsar enter ejecuto también buscar pokemon
function submitFormHandler(event){
  event.preventDefault();
  searchPokemonHandler();
}

//Añado mis listeners
elementForm.addEventListener('submit',submitFormHandler);
buttonSearch.addEventListener('click',searchPokemonHandler);
window.addEventListener('load',init);
