import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
  return <ul className="pokemon__list">
    {props.items.map(item => {
      return <li key={item.id}>
        <Pokemon
          imgUrl={item.url}
          name={item.name}
          pokeTypes={item.types}
        />
      </li>
    })}
  </ul>
}

export default PokeList;