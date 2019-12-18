import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';


//Quiero pintar por consola el valor de mi input, pero en realidad
//donde sé el valor de mi input es en mi componente hijo Form, que está anidado
//dentro de header, la función se la pasaré a través de header por props hasta
//mi form, form recogerá el valor de mi input y lo mandará a mi componente madre.
class App extends React.Component {

  //aquí defino la función que pinta como método de mi componente App
  //recibe algo y pinta ese algo, este algo valdrá lo que sea que le llegué como input.value
  //desde mi hijo
  consoleValue (loqueseaquereciba){
    console.log(loqueseaquereciba)
  }

  render() {
    return (
      <div className="App">
        {/* Header es un componente intermediario que recibe la función a través de sus props */}
        <Header propsdeHeader={this.consoleValue}/>
      </div>
    );
  }
}

export default App;
