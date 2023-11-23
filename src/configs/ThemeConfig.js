import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03989E',
      light: '#56BABE',
      lighter: '#B1DFE1',
      dark: '#026C70',
      darker: '#014042',
    },

    secondary: {
      main: '#FFA500',
      light: '#FFC354',
      lighter: '#FFE3B0',
      dark: '#B57500',
      darker: '#6B4500',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

export default theme;
