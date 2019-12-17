import React from 'react';

//en los componentes dummy o funcionales los datos les llegan a través de los parámetros de nuestra función a través de las props.

const Show = props => {
  return (
    <div>
      <span>Serie:{props.title}</span>
      <img src={props.img}/> 
    </div>
  );
}

export default Show;
