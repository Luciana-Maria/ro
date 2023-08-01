import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';/*o theme não esta em {}pq é importação padrão*/
import GlobalStyles from './styles/global';
import { SignUp } from './pages/SignUp';
import { New } from './pages/New';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       
    <GlobalStyles/>
      <Routes />
    
    </ThemeProvider>
  </React.StrictMode>
)
