import react, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useBuscarInfoQuery } from "./Queries/queryEjemplo";
import { useQueryPokeDetalle } from "./Queries/queryPokeDetalle";

function Home (){

  const [buscador, setBuscador] = useState("");
  //const [poke, setPoke] = useState(null);
  const [listaAux, setListaAux] = useState([]);
  const [listaTres, setListaTres] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };

const [params, setParams]=useState({ limit: 2000});
const [parametros, setParametros]=useState({ valor: ""});

// npm i react-query <-- Libreria React Query.
const {data: poke, isLoading:cargandoPoke}= useQueryPokeDetalle(parametros);

const {
    data: nuevoListado,
    isLoading: cargando,
    refetch: recargar,
    isError: errors,
  } = useBuscarInfoQuery(params);

console.log("rq",nuevoListado);

 

  const pokedetalle = (id) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then((response) => {
      setPoke(response.data);
    });
  };


  useEffect(() => {
    if (buscador.trim() !== "") {
      let result = nuevoListado.filter((item) =>
        item.label.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    } else {
      setListaAux([]);
    }
  }, [buscador]);



  const agregar = (item) => {
    setParametros({valor: item.id});
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

            {cargando ? "hola":
            
            nuevoListado?.map((item, index) => (
              <ListItem key={index}>
                {item.label},{item.id},{index}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "green" }}>
          <List>
            {
              listaAux.map((item, index) => (
                <ListItem key={index}>
                  {item.label}

                  <Button
                  variant = "contained"
                   disabled = {cargandoPoke || parametros.valor == item.id}
                  onClick={() => agregar(item)}></Button>
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

export default Home;