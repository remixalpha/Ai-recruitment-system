import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginRegistrationPage from "./components/LoginRegistrationPage";
import UserHomePage from "./components/UserProfilePage";
import HrHomePage from "./components/HRProfilePage";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/loginregisterpage" element={<LoginRegistrationPage />} />
        <Route path="/user/;email" element={<UserHomePage />} />
        <Route path="/hr/:email" component={<HrHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
