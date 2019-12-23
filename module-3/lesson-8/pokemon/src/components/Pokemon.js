import React from 'react';

const Pokemon = props => {
  return <div className="pokemon">
    <img src={props.imgUrl} alt={props.name}/>
    <h3>{props.name}</h3>
    <ul>
      {props.pokeTypes.map((type,index) => <li key={index}>{type}</li>)}
    </ul>
  </div>
}

export default Pokemon;