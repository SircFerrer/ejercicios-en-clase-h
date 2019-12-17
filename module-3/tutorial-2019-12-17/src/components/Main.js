import React from 'react';
import Modal from './Modal'

function Main() {
  return (
    <div>
      <h2>Main:</h2>
      <Modal
        title="¿Estás seguro que quiere guardar?"
      >
        <button>Sí</button>
        <button>No</button>
        <button>Guardar con otro nombre</button>
      </Modal>

    </div>
  );
}

export default Main;
