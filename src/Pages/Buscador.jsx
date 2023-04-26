import react, { useState } from "react";
import { useQueryPokeDetalle } from "../Queries/queryPokeDetalle";
import { Alert, Button, Card, CardContent, CardMedia, TextField } from "@mui/material";

export default function Buscador() {
  const [parametros, setParametros] = useState({ valor: "" });
  const { data : poke, isError: hayError} = useQueryPokeDetalle(parametros);
  const [buscador, setBuscador] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };

  const buscarInfo = () => {
    setParametros({ valor: buscador });
  };

  console.log(poke);

  return (
    <>
      <TextField
        label="Pokemon"
        name="pokemon"
        type="text"
        variant="outlined"
        value={buscador}
        onChange={handleInputChange}
      />
      <Button onClick={() => buscarInfo()}>Holi</Button>
{hayError && 
<Alert severity="error">ese pokemon no existe</Alert>
}
      <Card>
        <CardMedia component="img" image={poke?.sprites.front_default} />

        <CardContent>
          numero : {poke?.id} <br />
          nombre : {poke?.name}
        </CardContent>
      </Card>
    </>
  );
}
