import React from 'react';
import { useThemeContext } from './context/themeContext';
import { lightTheme,darkTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Sports from './components/Sports/Sports';
import Board from './components/Board/Board';

const App = () => {
  const { theme } = useThemeContext();
  return (
   <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Board' element={<Board />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;