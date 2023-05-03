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
import { useBuscarInfoQuery } from "./Queries/queryEjemplo";
import { Link } from "react-router-dom";

function Home() {
  const [open, setOpen] = useState(false);

  const [buscador, setBuscador] = useState("");
  //const [poke, setPoke] = useState(null);
  const [listaAux, setListaAux] = useState([]);
  const [listaTres, setListaTres] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };

  const [params, setParams] = useState({ limit: 2000 });
  const [parametros, setParametros] = useState({ valor: "" });

  const {
    data: nuevoListado,
    isLoading: cargando,
    refetch: recargar,
    isError: errors,
  } = useBuscarInfoQuery(params);

  const handleClose = () => {
    setOpen(false);
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
    setParametros({ valor: item.id });
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
            {cargando
              ? "hola"
              : nuevoListado?.map((item, index) => (
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
                <Link key={index} to={"/pokeDetalle/"+item.label}>
                <ListItem key={index}>
                {item.label}
                </ListItem>
                </Link>
                
              )) 
            }
          </List>
        </Grid>
        <Grid item md={4} xs={4} sx={{ background: "red" }}></Grid>
      </Grid>
    </Box>
  );
}

export default Home;
