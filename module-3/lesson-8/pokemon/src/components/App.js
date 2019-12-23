import React from 'react';
import '../stylesheets/App.scss';
import data from '../api/data';
import PokeList from './PokeList';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.connectToApi = this.connectToApi.bind(this)
    this.state = {
      pokemons:data,
      //1---> inicializo el estado de mi input para controlarlo con react
      inputValue:''
    }
  }

  //2 ---> escribo la función que recibirá el valor del input desde el componente Search
  //lo que hará esta función será modificar mi estado inicial de mi input vacío con lo que yo escriba
  //desde mi componente será el input.value y actualizará el valor del estado
  handleChange(text){
    this.setState({inputValue:text});
  }

  connectToApi(pokeName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  //3-->escribo la función que manejará el submit, será llamada desde Search.js
  //hace lo que tenga que hacer con los datos del submit, le pasa el estado actualizado del input a connectToApi
  handleSubmit(){
    this.connectToApi(this.state.inputValue)
  }

  render() {
    return (
      <div className="App">
        <Header 
          //2.1-->envío por las props de header la función para que llegue hasta Search 
          handleChange={this.handleChange}
          //3.1-->envío por las props de header la función para que llegue hasta Search 
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
        />
        <PokeList items={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
