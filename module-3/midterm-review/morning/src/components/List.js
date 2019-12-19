import React from 'react';

function List(props) {
  return <div>
    <ul className="list">
      {props.children}
    </ul>
  </div>
}

export default List;
