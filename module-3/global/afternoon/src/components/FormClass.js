import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    console.log(event.target.value);
    console.log(this)
  }

  onSubmit(event){
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="search">
          Busca series en componente de clase
        </label>
        <input type="text" id="search" name="search" onKeyUp={this.searchHandler}/>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Form;
