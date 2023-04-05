import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
  const [booleano, setBooleano]= useState(true)
  const [variablex, setvariablex]= useState(null)

  const handleInputChange=(event)=>{
const { name, value } = event.target;
    setvariablex({ ...variablex, 
    [name]: value });
    console.log(variablex)
      }

  return (    <div className="App">   
 <h1>{variablex ? variablex.pokemon : ""}</h1>

 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setBooleano(!booleano)}>
           {
          booleano ? "hola":"chao"
        }

        </button>

       


      <TextField
            label="Pokemon"
            name="pokemon"
            type="text"
            variant="filled"
            onChange={handleInputChange}
          />


        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
