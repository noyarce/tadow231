import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useQueryPokeDetalle } from "../Queries/queryPokeDetalle";
import { Card, CardContent, CardMedia } from "@mui/material";

export default function AlertDialog({id, open, handleClose}) {

 const { data: poke, isLoading: cargandoPoke } = useQueryPokeDetalle({valor: id});

console.log(poke);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
         
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

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
