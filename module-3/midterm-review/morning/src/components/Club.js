import React from 'react';

function Club(props) {
  const items = props.club.members;
  return <li className="border--medium">
    <i>{props.club.fa}</i>
    <h2>{props.club.name}</h2>
    <p>Members:</p>
    <ul className="club__members">
      {items.map((item, index) => {
        return <li
          key={index}
          className="club__member"
        >{item}</li>
      })}
    </ul>
  </li>
}

export default Club;
