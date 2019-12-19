import React from 'react';
import apiData from '../api/data.json';
import ClubList from './List.js';
import Club from './Club.js';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      clubs: apiData
    };
  }

  render() {
    return (
      <div>
        <ClubList>
          {this.state.clubs.map((club, index) => {
            return <Club
              key={index}
              club={club}
            />
          })}
        </ClubList>
      </div>
    );
  }
}

export default App;
