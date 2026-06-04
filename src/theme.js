import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6B1A',
      light: '#FF8C47',
      dark: '#E85D04',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#111111',
      light: '#2B2B2B',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
    grey: {
      100: '#F5F5F5',
      200: '#EBEBEB',
      400: '#BDBDBD',
      600: '#757575',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.02em' },
    h2: { fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.02em' },
    h3: { fontFamily: '"Bebas Neue", sans-serif', letterSpacing: '0.01em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '14px 32px',
          fontSize: '0.825rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          transition: 'all 0.2s ease',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          background: '#FF6B1A',
          '&:hover': {
            background: '#E85D04',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(255,107,26,0.4)',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          borderColor: '#FF6B1A',
          color: '#FF6B1A',
          '&:hover': {
            borderWidth: 2,
            background: '#FF6B1A',
            color: '#FFFFFF',
          },
        },
        outlinedSecondary: {
          borderWidth: 2,
          borderColor: '#111111',
          color: '#111111',
          '&:hover': {
            borderWidth: 2,
            background: '#111111',
            color: '#FFFFFF',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': { borderColor: '#E0E0E0', borderWidth: 1 },
            '&:hover fieldset': { borderColor: '#FF6B1A' },
            '&.Mui-focused fieldset': { borderColor: '#FF6B1A', borderWidth: 2 },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#FF6B1A' },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#FFFFFF', color: '#111111' },
      },
    },
  },
})

export default theme
