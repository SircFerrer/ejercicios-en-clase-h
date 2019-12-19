import React from 'react';
import Form from './Form';
// import FormClass from './FormClass';


const Header = (props) => {
  console.log(props)
  return (
    <header>
      <Form
        propsdeForm = {props.propsdeheader}
      />
      {/* <FormClass/> */}
    </header>
  );
}

export default Header;
