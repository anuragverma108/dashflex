import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';
import { themeSettings } from '../theme';

export const useTheme = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return { theme };
}; 