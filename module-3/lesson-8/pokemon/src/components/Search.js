import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //Escribo la función que recogerá el valor del input
  //mediante lifting por las props se la paso como parámetro a la función que he recibido
  //para actualizar el estado de mi input
  handleChange (event) {
    //2.3-->ejecuto la función que me viene desde Appjs y ha pasado por Header (lifting)
    this.props.handleChange(event.target.value)
  }

  //Escribo la función que enviará los datos de mi formulario
  //ejecuta la función que le viene por props (handleSubmit)
  handleSubmit(event){
    event.preventDefault();
    //3.3-->ejecuto la función que me viene desde Appjs y ha pasado por Header (lifting)
    this.props.handleSubmit()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} value={this.props.inputValue}/>
      <button type="submit">Buscar</button>
    </form>
  }
}


export default Search;