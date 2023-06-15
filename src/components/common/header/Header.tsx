"use client"
/** React */
import React from "react";
/** redux */
import { useAppDispatch } from "@/store/hooks";
import { setSliceState } from "@/store/slice/sidebarSlice";
/** style */
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
/** icon */
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const dispatch = useAppDispatch();

  /** SideBar 버튼 */
  const handleLinkChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setSliceState());
  };

  return (
    <AppBar
        position="relative"
        sx={{
          width: { md: `calc(100% - ${240}px)` },
          ml: { md: `${240}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleLinkChange}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ justifyContent: "right" }}>
            BOBBY TLI BLOG
          </Typography>

        </Toolbar>
      </AppBar>
  )
}

export default Header