import React from 'react';
import ShowItem from './ShowItem';

const ShowList = props => {
    return (
      <div>
        <h2 className="title--medium">{props.title}</h2>
        <ul className="cards">
          {props.items.map(item => {
            return <ShowItem
              key={item.show.id}
              name={item.show.name}
              image={item.show.image.medium}
            />
          })}
        </ul>
      </div>
    );
}

export default ShowList;
