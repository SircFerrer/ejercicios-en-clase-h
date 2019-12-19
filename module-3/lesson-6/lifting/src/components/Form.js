import React from 'react';

//Aquí en este componente es donde conozco el valor de input.value, por eso es donde 
//voy a mandar como argumento a la función que me está viniendo por props,
//haré lifting de este dato hacia mi madre(Header), esta lo recogerá y se lo pasará
//finalmente a la función que he definido en App.js, que es la que se encarga de pintar
const Form = props => {

  const getInputValue = (event) => {
    props.propsdeForm(event.target.value)
  }

  return <form>
    <label htmlFor='search'>Buscar</label>
    <input type='text' id='search' onKeyUp={getInputValue}/> 
  </form>
}

export default Form;