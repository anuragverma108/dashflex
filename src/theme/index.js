export const tokens = {
  primary: {
    100: '#e5eafc',
    200: '#c2cffa',
    300: '#9eb4f7',
    400: '#7b99f5',
    500: '#577ef2',
    600: '#4665c2',
    700: '#344c91',
    800: '#233261',
    900: '#111930'
  },
  grey: {
    100: '#f0f0f3',
    200: '#e1e2e7',
    300: '#d1d3da',
    400: '#c2c5ce',
    500: '#b3b6c2',
    600: '#8f929b',
    700: '#6b6d74',
    800: '#48494e',
    900: '#242427'
  }
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: tokens.primary[500],
            },
            secondary: {
              main: tokens.grey[500],
            },
            background: {
              default: tokens.grey[900],
              paper: tokens.grey[800],
            },
          }
        : {
            primary: {
              main: tokens.primary[500],
            },
            secondary: {
              main: tokens.grey[500],
            },
            background: {
              default: '#fcfcfc',
              paper: '#ffffff',
            },
          }),
    },
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
}; 