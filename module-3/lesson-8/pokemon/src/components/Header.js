import React from 'react';
import Search from './Search';

const Header = props => {
  return <header>
    <Search 
      //2.2-->recibo por props la función handleChange que actualiza el valor de mi input 
      handleChange={props.handleChange}
      //3.2-->recibo por props la función handleSubmit que enviará mi formulario 
      handleSubmit={props.handleSubmit}
      inputValue={props.inputValue}
    />
  </header>
}

export default Header;