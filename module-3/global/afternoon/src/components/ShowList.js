import React from 'react';
import Show from './Show';

const ShowList = props => {
  return (
    <ul>
      {props.items.map((show,index) => {
       return <li key={index}>
          <Show title={show.title} img={show.img}/>
        </li>
      })}
    </ul>
  );
}

export default ShowList;
