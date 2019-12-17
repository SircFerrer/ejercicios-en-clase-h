import React from 'react';
import Menu from './Menu';

function Header(props) {
  return (
    <div>
      Header:
      <Menu menuItems={props.headerMenuItems} />
    </div>
  );
}

export default Header;
