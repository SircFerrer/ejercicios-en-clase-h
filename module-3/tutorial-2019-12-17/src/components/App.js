import React from 'react';
import Header from './Header';
import Main from './Main';

const getMenuItemsHeader = () => {
  return [
    {
      text: 'Quiénes somos',
      url: 'http://web.com/quienes-somos'
    },
    {
      text: 'Contacto',
      url: 'http://web.com/contacto'
    }
  ];
}

function App() {
  return (
    <div>
      <Header
        headerMenuItems={getMenuItemsHeader()}
      />
      <Main />
    </div>
  );
}

export default App;
