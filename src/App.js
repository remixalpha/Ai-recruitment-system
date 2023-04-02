import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginRegistrationPage from './components/LoginRegistrationPage';
import UserHomePage from './components/UserProfilePage';
import HRHomePage from './components/HRProfilePage';
import HRProfilePage from './components/HRProfilePage';

function App() {
  
  return (




    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LoginRegistrationPage} />
        <Route path="/user-home" component={UserHomePage} />
        <Route path="/hr-home" component={HRHomePage} />
        <Route path="/hr-profile" component={HRProfilePage} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
