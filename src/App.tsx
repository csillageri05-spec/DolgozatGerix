import { useState } from 'react'
import Kartyak from '.components/Kartyak'
import './App.css'
import { TANULOSZOBAK, Tanuloszoba } from './adatok'

function App() {
  const [szobak, setSzobak] = <Tanuloszoba[]>(TANULOSZOBAK);

  return (
    <>
      <div className="container">
        <div className="fejlecDoboz"><header><h1>Csillag GergŐ Zsolt - Tanuló Szobák</h1></header>
          <p>Találd meg a számodra megfelelő tanulószobát</p></div>

        <div className='Kartyak'>
          
          
        </div>
      </div>
    </>
  )
}

export default App
