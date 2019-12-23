import React from 'react';
import Header from './Header';
import ShowList from './ShowList';
import shows from '../api/data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      shows: shows,
      searchText:''
    }
    // this.search = this.search.bind(this);
  }

  // search(){
  //   console.log('buscando')
  // }

  handleSearch(searchText) {
    this.setState({searchText:searchText})
  }

  render(){
    return (
      <div>
        <Header showTitle={this.state.searchText} handleSearch={this.handleSearch} search={this.search}/>
        <p>La serie pintada es {this.state.searchText} </p>
        <div className="col2">
          <ShowList
            title="Resultados"
            emptyListMessage="No hay resultados"
            items={this.state.shows}
          />
        </div>
      </div>
    );
  }
}

export default App;
