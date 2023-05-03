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

import { useParams  } from "react-router-dom";

export default function PokeDetalle() {

  const params = useParams();
  const { data: poke, isError: hayError } = useQueryPokeDetalle({ valor: params.pokeId });
  
  return (
    <>
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
