import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, List, ListItem, TextField } from "@mui/material";
import axios from "axios";

function App() {
  const [variablex, setvariablex] = useState("");
  const [listado, setListado] = useState([]);
  const [buscador, setBuscador] = useState("");
  const [listaAux, setListaAux] = useState([]);
  const [listaTres, setListaTres] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };



  const obtenerPoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setListado(response.data.results);
      });
  };

  useEffect(() => {
    obtenerPoke();
  }, []);

  useEffect(() => {
    if (buscador.trim() !== "") {
      let result = listado.filter((item) =>
        item.name.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    }
  }, [buscador]);

  //      https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc

  const agregar = (item) => {
    setListaTres((listaTres) => [...listaTres, item]);
    setBuscador("");
    setListaAux([]);

  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item md={4} xs={4} sx={{ background: "grey" }}>
          <TextField
            label="Pokemon"
            name="pokemon"
            type="text"
            variant="outlined"
            value={buscador}
            onChange={handleInputChange}
          />
          <List>
            {listado.map(
              (
                item,
                index // Parentesis
              ) => (
                <ListItem key={index}>
                  {item.name},{index + 1}
                </ListItem>
              )
            )}
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "green" }}>
          <List>
            {
             
              listaAux.map(
                (
                  item,
                  index 
                ) => (
                  <ListItem key={index}>
                    {item.name}
                    <button onClick={() => agregar(item)}>[{index}]</button>
                  </ListItem>
                )
              ) // parentesis x2
            }
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "red" }}>
          <List>
            {
              // LLAVE
              listaTres.map(
                (
                  item,
                  index // Parentesis
                ) => (
                  <ListItem key={index}>
                    {item.name},{index}
                  </ListItem>
                )
              ) // parentesis x2
            }
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
