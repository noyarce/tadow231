import { useEffect, useState } from "react";
import "./App.css";
import { List, ListItem, TextField } from "@mui/material";
import axios from "axios";

function App() {
  const [variablex, setvariablex] = useState("");
  const [listado, setListado] = useState(["holi"]);
  const [buscador, setBuscador]= useState("");
  const [listaAux, setListaAux]= useState([])

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setvariablex( value );
  };

  const botonClick=()=>{
    setListado(listado=> [...listado, variablex]);
    setvariablex("");
  }

const obtenerPoke = ()=>{
axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(
      (response) => {
        setListado(response.data.results)
        }
      );
}

useEffect(()=>{ 
  obtenerPoke()
  },[]);



useEffect(() => {
    if (buscador.trim() !== "") {
      let result = listadoOriginal.filter((item) =>
        item.name.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    }
}, [buscador]);


//      https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc


  return (
    <div className="App">
      <div className="card">
        <TextField
          label="Pokemon"
          name="pokemon"
          type="text"
          variant="filled"
          value={variablex}
            onChange={handleInputChange}
        />
        <button onClick={() => botonClick()}>
        </button>

        <List>
          {// LLAVE
          listado.map((item, index) => ( // Parentesis
            <ListItem key={index}>
            {item.name},{index}
            </ListItem>
          )) // parentesis x2
          } 
        </List>
      </div>
    </div>
  );
}

export default App;
