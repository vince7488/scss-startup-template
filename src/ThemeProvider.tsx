import * as React from 'react';
import {PaletteMode, useMediaQuery} from '@mui/material';
import { red, blue, yellow, green } from '@mui/material/colors';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';

const testPalette: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#bb2459',
      light: '#f1b6c1',
      dark: '#a42823',
    },
    secondary: {
      main: '#b617b0',
      light: '#C445BF',
      dark: '#7a0f79',
    },
    warning: {
      main: yellow[500],
      light: yellow['A400'],
      dark: yellow[700],
    },
    error: {
      main: red[600],
      light: red[100],
      dark: red[900],
    },
    success: {
      main: green[500],
      light: green[200],
      dark: green[800],
    },
    info: {
      main: blue[400],
      light: blue[100],
      dark: blue[800],
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
};

const testTheme = createTheme({
  ...testPalette, // Include your base colors
});

interface TestThemeProviderProps {
  children: React.ReactNode;
}

export const TestThemeProvider: React.FC<TestThemeProviderProps> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
  const [mode, setMode] = React.useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  React.useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const theme = React.useMemo(
    () =>
      createTheme({
        ...testTheme,
        palette: {
          ...testTheme.palette,
          mode,
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};