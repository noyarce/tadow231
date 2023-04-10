import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, List, ListItem, TextField } from "@mui/material";
import axios from "axios";

function App() {
  const [variablex, setvariablex] = useState("");
  const [listado, setListado] = useState(["holi"]);
  const [buscador, setBuscador] = useState("");
  const [listaAux, setListaAux] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };

  const botonClick = () => {
    setListado((listado) => [...listado, variablex]);
    setvariablex("");
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
              // LLAVE
              listaAux.map(
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
        <Grid item md={4} xs={4} sx={{ background: "red" }}>
          <List>
            {
              // LLAVE
              listado.map(
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
