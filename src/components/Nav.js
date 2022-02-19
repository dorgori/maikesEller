import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "white" }}
        position="static"
        className="appBar"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon children={MenuItem} />
          </IconButton>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 4,
            }}
          >
            <a href="http://localhost:3000/">
              <img
                src="https://see.fontimg.com/api/renderfont4/MVdmr/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTI1MCwiZnMiOjUyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TWFhaWtlIEVsbGVyd2FsZA/exotic-necklace.png"
                alt="Calligraphy fonts"
              />
            </a>
          </div>
          {/* <Button color="inherit">Login</Button> */}

          <IconButton onClick={() => alert("Cart is empty")}>
            <ShoppingCartOutlinedIcon color="black" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

{
  /* <Typography */
}
// variant="h6"
// component="div"
// sx={{ flexGrow: 1 }}
// align="center"
// >
{
  /* Maaike Ellerwald */
}
{
  /* </Typography> */
}
