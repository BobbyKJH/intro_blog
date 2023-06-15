"use client"
/** react */
import {useState} from "react";
import { useRouter } from 'next/navigation';
/** redux */
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeSliceState, setSliceState, toggleSidebar } from '@/store/slice/sidebarSlice';
/** utils */
import { pathName } from '@/utils/Utils';
/** style */
import { ListItems } from '@/style/components/common/sidebar/SideBar.styled';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
/** icon */
import InboxIcon from '@mui/icons-material/MoveToInbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import * as React from "react";



const SideBar = () => {
  const sidebar = useAppSelector(toggleSidebar);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(true);

  /** Link Button */
  const toggleLink = (path: string) =>{
    router.push(path);
    dispatch(closeSliceState());
  }

  const drawer = (
    <>
      <Toolbar>{}</Toolbar>
      <List>
            <div onClick={() => toggleLink("/")} >
                <ListItems $bgc={pathName("/")} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"홈"} />
                    </ListItemButton>
                </ListItems>
            </div>

            <div onClick={() => toggleLink("/project")} >
                <ListItems $bgc={pathName("project")} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"프로젝트"} />
                    </ListItemButton>
                </ListItems>
            </div>
        
            <ListItems $bgc={pathName("notice")} onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <EditNoteIcon />
              </ListItemIcon>
              <ListItemText primary="게시판" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItems>
            
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div onClick={() => toggleLink("/notice")}>
                <List component="div" disablePadding>
                  <ListItems $bgc={pathName("/notice")} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                  </ListItems>
                </List>
              </div>
              
              <div onClick={() => toggleLink("/notice/make")}>
                <List component="div" disablePadding>
                  <ListItems $bgc={pathName("/notice/make")} sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="만들기" />
                  </ListItems>
                </List>
              </div>
            </Collapse>
      </List>
    </>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={sidebar}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          onClose={() => dispatch(setSliceState())}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}
 
export default SideBar;