import React from 'react';
import Contador from './components/Contador';
import Texto from './components/Texto';
//Importar CSS
import './css/main.css';


function App() {
  return (
    <div className="App">
      <h1 className='titulo'>CONTADOR</h1>
      <Contador value = {0}/>
      <Texto/>
    </div>
  );
}

export default App;
