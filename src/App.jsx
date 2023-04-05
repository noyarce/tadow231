import { useEffect, useState } from "react";
import "./App.css";
import { List, ListItem, TextField } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [booleano, setBooleano] = useState(true);
  const [variablex, setvariablex] = useState(null);
  const [listado, setListado] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setvariablex({ ...variablex, [name]: value });
    console.log(variablex);
  };

  useEffect(() => {
    setListado([
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ]);
  }, []);

  return (
    <div className="App">
      <div className="card">
        <TextField
          label="Pokemon"
          name="pokemon"
          type="text"
          variant="filled"
          onChange={handleInputChange}
        />
        <button onClick={() => setBooleano(!booleano)}>
          {booleano ? "hola" : "chao"}
        </button>

        <List>
          {listado.map((item) => (
            <ListItem>{item.id}</ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

export default App;
