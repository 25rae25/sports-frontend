import React from 'react';
import { useThemeContext } from './context/themeContext';
import { lightTheme,darkTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import Main from './components/Main';

const App = () => {
  const { theme } = useThemeContext();
  return (
   <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
        <Main />
    </ThemeProvider>
  );
}

export default App;