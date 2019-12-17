import React from 'react';

function Modal(props) {
  return (
    <div>
      <span>x</span>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Modal;
