import { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import axios from "axios";

function App() {
  const [buscador, setBuscador] = useState("");
  const [listado, setListado] = useState([]);
  const [poke, setPoke] = useState(null);
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

  const pokedetalle = (id) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((response) => {
      setPoke(response.data);
    });
  };

  useEffect(() => {
    obtenerPoke();
  }, []);
  console.log(poke);

  useEffect(() => {
    if (buscador.trim() !== "") {
      let result = listado.filter((item) =>
        item.name.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    } else {
      setListaAux([]);
    }
  }, [buscador]);

  //      https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc

  const agregar = (item) => {
    let result = listado.indexOf(item);
    pokedetalle(result+1);
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
            {listado.map((item, index) => (
              <ListItem key={index}>
                {item.name},{index + 1}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "green" }}>
          <List>
            {
              listaAux.map((item, index) => (
                <ListItem key={index}>
                  {item.name}
                  <button onClick={() => agregar(item)}>[{index}]</button>
                </ListItem>
              )) // parentesis x2
            }
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "red" }}>
          <Card>
            <CardMedia
              component="img"
              image={poke?.sprites.front_default}
              // ver como ajustar url
            />

            <CardContent>
              numero : {poke?.id} <br />
              nombre : {poke?.name}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
