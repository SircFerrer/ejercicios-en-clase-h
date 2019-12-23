import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleSearch(event) {
    this.props.handleSearch(event.target.value);
  }

  submitSearch(event) {
    event.preventDefault();
    debugger;
    this.props.search();
  }

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <label
          htmlFor="search"
          className="form__label"
        >
          Busca una serie:
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="form__input-text"
          onKeyUp={this.handleSearch}
        />
        <input
          type="submit"
          className="form__btn"
        />
      </form>
    );
  }
}

export default Form;
