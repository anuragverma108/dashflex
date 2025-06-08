import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useTheme,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
  NotificationsOutlined,
  PersonOutlined,
  Search,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../store/slices/themeSlice';

export const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: theme.palette.background.paper,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              backgroundColor: theme.palette.background.default,
              borderRadius: 1,
              ml: 2,
              p: 1,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            <Search sx={{ mr: 1 }} />
            <input
              type="text"
              placeholder="Search..."
              style={{
                border: 'none',
                outline: 'none',
                background: 'none',
                color: theme.palette.text.primary,
              }}
            />
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton onClick={() => dispatch(toggleMode())}>
            {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton>
            <NotificationsOutlined />
          </IconButton>
          <IconButton onClick={handleMenu}>
            <PersonOutlined />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}; 