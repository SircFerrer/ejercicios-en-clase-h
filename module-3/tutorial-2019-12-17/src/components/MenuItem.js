import React from 'react';

function MenuItem(props) {
  console.log(props)
  return (
    <div foo={JSON.stringify(props)}>
      MenuItem: {props.item.text} {props.item.url}
    </div>
  );
}

export default MenuItem;
