import React from 'react';

const Form = props => {

  const searchHandler = (event) => {
    props.propsdeForm(event.target.value);
  }

  return (
    <form>
      <label htmlFor="search">
        Busca series en componente dummy
      </label>
      <input type="text" id="search" name="search" onKeyUp={searchHandler}/>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
