import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginRegistrationPage from "./components/LoginRegistrationPage";
import UserHomePage from "./components/UserProfilePage";
import HRHomePage from "./components/HRProfilePage";
import HRProfilePage from "./components/HRProfilePage";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/loginregisterpage" element={<LoginRegistrationPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/hr-home" component={HRHomePage} />
        <Route path="/hr-profile" component={HRProfilePage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
