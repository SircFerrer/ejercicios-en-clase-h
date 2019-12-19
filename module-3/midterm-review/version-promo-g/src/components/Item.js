import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const renderMembers = members => {
  return members.map(member => {
    return <li>{member}</li>;
  });
};

const Item = props => {
  const icon = props.club.icon.replace('fas fa-', '');
  return (
    <li>
      <div>
        <h2>{props.club.name}</h2>
        <i className={props.club.icon}></i>
        <FontAwesomeIcon icon={['fas', icon]} />
        <p>Members:</p>
        <ul>{renderMembers(props.club.members)}</ul>
      </div>
    </li>
  );
};

export default Item;
