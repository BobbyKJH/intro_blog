"use client"

/** redux */
import { useAppDispatch } from "@/store/hooks";
import { setSliceState } from "@/store/slice/sidebarSlice";
/** style */
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
/** icon */
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(setSliceState());
  }

  return (
    <AppBar
        position="relative"
        sx={{
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ justifyContent:"right" }}>
            BOBBY TLI BLOG
          </Typography>

        </Toolbar>
      </AppBar>
  )
}

export default Header