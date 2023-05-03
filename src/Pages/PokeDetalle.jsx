import React, { useEffect, useState } from "react";

import { useQueryPokeDetalle } from "../Queries/queryPokeDetalle";
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";

export default function PokeDetalle() {

    const navigate = useNavigate();

  const { pokeId } = useParams();

  const { data: poke, isError: hayError } = useQueryPokeDetalle({ valor: pokeId });
  
  return (
    <>
      <Button onClick={() => navigate(-1)}>Volver</Button>
      {hayError && <Alert severity="error">ese pokemon no existe</Alert>}
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
