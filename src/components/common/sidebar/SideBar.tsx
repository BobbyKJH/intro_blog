"use client"
/** react */
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



const SideBar = () => {
  const sidebar = useAppSelector(toggleSidebar);
  const dispatch = useAppDispatch();
  const router = useRouter();

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

            <div onClick={() => toggleLink("/notice")}>
                <ListItems $bgc={pathName("notice")} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <EditNoteIcon />
                        </ListItemIcon>
                        <ListItemText primary={"게시판"} />
                    </ListItemButton>
                </ListItems>
            </div>
      </List>
    </>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={sidebar}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
          onClose={() => dispatch(setSliceState())}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
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