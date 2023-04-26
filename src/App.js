import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Meethome from "../src/Home";
import Room from "./Room";
import QuestionBox from "../src/components/QuestionBox";
import HrHome from "../src/components/HRhome";
import HrProfile from "../src/components/HRProfile";
import JobAppli from "../src/components/JobApplication";




import LoginRegPage from "./components/LoginRegistrationPage";
import LoginPage from "./components/Login";


import UserHomePage from "./components/UserHome";
import UserProf from './components/UserProfile';
import UserJobs from './components/UserJobs';
import UserMeetings from './components/UserMeetings';
import UserCompanies from './components/UserCompanies';
import UserSettings from './components/UserSettings';



import HrHomePage from "./components/HRhome";

import "./css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/meethome" element={<Meethome />} />
        <Route path="/room/:roomID" element={<Room />} />
        <Route exact path="/assesmentest" element={<QuestionBox />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hrhome" element={<HrHome />} />
        <Route path="/hrPro" element={<HrProfile />} />
        <Route path="/jobapp" element={<JobAppli />} />

        <Route path="/logreg" element={<LoginRegPage />} />
        <Route path="/loginpage" element={<LoginPage />} />


        <Route path="/user/:email" element={<UserHomePage />} />
        <Route path="/profile" element={<UserProf />} />
        <Route path="/jobs" element={<UserJobs />} />
        <Route path="/meetings" element={<UserMeetings />} />
        <Route path="/companies" element={<UserCompanies />} />
        <Route path="/settings" element={<UserSettings />} />



        <Route path="/hr/:email" component={<HrHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
