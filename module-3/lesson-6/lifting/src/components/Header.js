import React from 'react';
import Form from './Form';

//Header recibe por props la función(consoleValue) que le viene de su madre 
//y se la pasa a su vez a Form (su hija) por las props de Form que he definido
//en mi componente
const Header = props => {
  return <Form propsdeForm={props.propsdeHeader}/>
}

export default Header;