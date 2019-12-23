import React from 'react';

const InputBlock = props => {
  const handleChange = (evt) =>  {
    props.handleChange(evt.target.name,evt.target.value)
  }

  return <p>
    <label>{props.inputTitle}</label><br/>
    <input 
      type={props.inputType} 
      name={props.inputName}
      onChange={handleChange}
      value={props.inputValue}
    />
  </p>
}

export default InputBlock;

