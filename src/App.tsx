import { useState } from 'react'
import Kartyak from '.components/Kartyak'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="fejlecDoboz"><header><h1>Csillag GergŐ Zsolt - Tanuló Szobák</h1></header>
          <p>Találd meg a számodra megfelelő tanulószobát</p></div>

        <div className='Kartyak'>
          <button></button>
          <div className="Kartya"></div>
        </div>
      </div>
    </>
  )
}

export default App
