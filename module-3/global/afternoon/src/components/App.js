import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import ShowList from './ShowList';
import api from '../data/apiData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.consoleLogenApp = this.consoleLogenApp.bind(this);
  }

  consoleLogenApp(inputValue){
    console.log(inputValue)
  }

  render() {
    return (
      <div className="app">
        <Header propsdeheader={this.consoleLogenApp}/>
        <ShowList items={api}/>
      </div>
    );
  }
}

export default App;
