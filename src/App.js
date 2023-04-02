import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginRegistrationPage from './components/LoginRegistrationPage';
import UserHomePage from './components/UserProfilePage';
import HRHomePage from './components/HRProfilePage';
import HRProfilePage from './components/HRProfilePage';

import { Navigate } from 'react-router-dom';


// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import Presentation from "./layouts/pages/presentation";

function App() {
  
  return (




    <BrowserRouter>
      <Routes>
        <Route path="/presentation" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
        
        <Route exact path="/loginregisteration" component={LoginRegistrationPage} />
        <Route path="/user-home" component={UserHomePage} />
        <Route path="/hr-home" component={HRHomePage} />
        <Route path="/hr-profile" component={HRProfilePage} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
