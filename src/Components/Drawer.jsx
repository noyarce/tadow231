import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { Menu} from "@mui/icons-material";

function CustomToolbar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>

          <NavLink to="/">
            <Button color="inherit">Home</Button>
          </NavLink>

          
          <NavLink to="buscar">
            <Button color="inherit">buscador</Button>
          </NavLink>


        </Toolbar>
      </AppBar>
  );
}

export default CustomToolbar;
