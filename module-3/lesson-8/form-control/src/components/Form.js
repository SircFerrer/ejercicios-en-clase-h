import React from 'react';
import InputBlock from './InputBlock';

const Form = props => {

  const handleSubmit = event => {
    event.preventDefault();
    props.handleSubmit();
  }
  
  return <form onSubmit={handleSubmit}>
    <InputBlock
      inputTitle='Nombre' 
      inputType='text' 
      inputName='firstName'
      inputValue={props.inputValue.firstName}
      handleChange={props.handleChange}
    />
    <InputBlock
      inputTitle='Apellidos' 
      inputType='text' 
      inputName='lastName'
      inputValue={props.inputValue.lastName}
      handleChange={props.handleChange}
    />
    <button type='submit'>Enviar</button>
  </form>
}

export default Form;

