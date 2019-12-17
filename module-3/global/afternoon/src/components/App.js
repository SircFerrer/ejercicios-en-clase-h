import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Show from './Show';
import ShowClass from './ShowClass';

const api = [
  {
    title: 'Aladdin',
    img: 'images/aladdin.jpg'
  },
  {
    title: 'El Rey León',
    img: 'images/rey-leon.jpg'
  }
]


function App() {
  return (
    <div className="app">
      <Header/>
      <Show title={api[1].title} img={api[1].img}/>
      <ShowClass title="Aladdin" img={api[0].img}/>
    </div>
  );
}

export default App;
