import React from 'react';
import { useThemeContext } from './context/themeContext';
import { lightTheme,darkTheme } from './commons/styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './commons/styles/global';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Board from './components/Board/Board';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  const { theme } = useThemeContext();
  return (
   <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Board' element={<Board />} />
          <Route path='/Signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;