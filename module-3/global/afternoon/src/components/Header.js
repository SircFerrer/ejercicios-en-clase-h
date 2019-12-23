import React from 'react';
import Form from './Form'

const Header = (props) => {
  console.log(props.handleSearch)
  return (
    <header>
      <h1 className="title--big">Buscador de series</h1>
      <h2>{props.showTitle}</h2>
      <Form
        handleSearch={props.handleSearch}
        search={props.search}
      />
    </header>
  );
}

export default Header;
