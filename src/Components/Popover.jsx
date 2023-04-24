import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia } from "@mui/material";
import { useQueryPokeDetalle } from "../Queries/queryPokeDetalle";

export default function BasicPopover({ idPoke }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const { data: poke, isLoading: cargandoPoke } = useQueryPokeDetalle({
    valor: idPoke,
  });

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {idPoke}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
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

      </Popover>
    </div>
  );
}
