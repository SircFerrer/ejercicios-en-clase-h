import React from 'react';

const Show = props => {
  return (
    <div>
      <span>{props.title}</span>
      <img src={props.img}/> 
    </div>
  );
}

export default Show;
