import React from 'react';
import getDataFromServer from '../api/api';
import List from './List';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.state = {
      clubs: []
    };
    // get data and set in react state
    getDataFromServer().then(clubs => {
      this.setState({ clubs });
    });
  }

  render() {
    console.log('Rendering...');
    return (
      <div>
        <List clubs={this.state.clubs} />
      </div>
    );
  }
}

export default App;
