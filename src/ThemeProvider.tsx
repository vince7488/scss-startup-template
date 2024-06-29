import * as React from 'react';
import {PaletteMode, useMediaQuery} from '@mui/material';
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
      main: '#ffc91e',
      light: 'FFD34B',
      dark: '#c79819',
    },
    error: {
      main: '#f33113',
      light: 'F55A42',
      dark: '#b2220c',
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