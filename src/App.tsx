import React from 'react';
import { useThemeContext } from './context/themeContext';
import { lightTheme,darkTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

function App() {
  const { theme } = useThemeContext();
  return (
   <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default App;