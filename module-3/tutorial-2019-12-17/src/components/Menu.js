import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
  return (
    <div>
      Menu manual:
      <MenuItem item={props.menuItems[0]} />
      <MenuItem item={props.menuItems[1]} />
      Menu con map:
      {
        props.menuItems.map((menuItem, key) => {
          console.log(menuItem)
          return <MenuItem key={key} item={menuItem} />
        })
      }

    </div>
  );
}

export default Menu;
