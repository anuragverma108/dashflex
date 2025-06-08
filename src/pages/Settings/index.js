import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
  useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../store/slices/themeSlice';

const Settings = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = theme.palette.mode;

  const handleThemeChange = () => {
    dispatch(toggleMode());
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Theme Settings
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <FormControlLabel
              control={
                <Switch
                  checked={mode === 'dark'}
                  onChange={handleThemeChange}
                  color="primary"
                />
              }
              label="Dark Mode"
            />

            <Box mt={3}>
              <Typography variant="subtitle1" gutterBottom>
                Current Theme:
              </Typography>
              <Typography color="primary">
                {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Color Preview
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    p: 2,
                    borderRadius: 1,
                    color: theme.palette.primary.contrastText,
                    textAlign: 'center',
                  }}
                >
                  Primary Color
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    p: 2,
                    borderRadius: 1,
                    color: theme.palette.secondary.contrastText,
                    textAlign: 'center',
                  }}
                >
                  Secondary Color
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.error.main,
                    p: 2,
                    borderRadius: 1,
                    color: theme.palette.error.contrastText,
                    textAlign: 'center',
                  }}
                >
                  Error Color
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.success.main,
                    p: 2,
                    borderRadius: 1,
                    color: theme.palette.success.contrastText,
                    textAlign: 'center',
                  }}
                >
                  Success Color
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Theme Information
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Background Color:
                </Typography>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    p: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                  }}
                >
                  {theme.palette.background.default}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Paper Color:
                </Typography>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    p: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                  }}
                >
                  {theme.palette.background.paper}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings; 