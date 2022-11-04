import { styled } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import ListItem from "@mui/material/ListItem";

export const NavBar = styled(AppBar)({
  background: "#fff",
});

export const NavBtn = styled(Button)({
  fontWeight: 700,
  color: "#fff",
  margin: "0 20px",
  ":hover": {
    color: "#000",
  },
  "> .path": {
    color: "#000",
  },
});

export const ListItems = styled(ListItem)({
  fontWeight: "900",
  color: "#000",
  textAlign: "center",
  a: {
    width: "100%",
  },
  ".path": {
    backgroundColor: "#000",
    color: "#fff",
  },
  ":hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});
