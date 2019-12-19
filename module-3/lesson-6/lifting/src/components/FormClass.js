import React from 'react';

class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.consoleValue = this.consoleValue.bind(this)
  }

  consoleValue(event) {
    console.log(event.target.value);
    console.log(this)
  }

  render() {
    return <form>
      <label htmlFor='search'>Buscar</label>
      <input type='text' id='search' onKeyUp={this.consoleValue}/> 
    </form>
  }
}

export default FormClass;