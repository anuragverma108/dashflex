import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ChevronLeft,
  Dashboard,
  TableChart,
  BarChart,
  CalendarToday,
  ViewKanban,
  Settings,
  ChevronRightOutlined,
} from '@mui/icons-material';

const navItems = [
  {
    text: 'Dashboard',
    icon: <Dashboard />,
    path: '/',
  },
  {
    text: 'Tables',
    icon: <TableChart />,
    path: '/tables',
  },
  {
    text: 'Charts',
    icon: <BarChart />,
    path: '/charts',
  },
  {
    text: 'Calendar',
    icon: <CalendarToday />,
    path: '/calendar',
  },
  {
    text: 'Kanban Board',
    icon: <ViewKanban />,
    path: '/kanban',
  },
  {
    text: 'Settings',
    icon: <Settings />,
    path: '/settings',
  },
];

export const Sidebar = ({
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.background.paper,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" fontWeight="bold">
                  DASHFLEX
                </Typography>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              </Box>
            </Box>
            <List>
              {navItems.map(({ text, icon, path }) => {
                const isActive = pathname === path;

                return (
                  <ListItem
                    key={text}
                    onClick={() => navigate(path)}
                    sx={{
                      backgroundColor: isActive
                        ? theme.palette.primary.light
                        : 'transparent',
                      color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main,
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {isActive && <ChevronRightOutlined />}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}; 