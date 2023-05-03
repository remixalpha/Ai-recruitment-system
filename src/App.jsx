import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Meethome from "./Home";
import Room from "./Room";
import QuestionBox from "./components/QuestionBox";

import HrHome from "./components/HRhome";
import HrProfile from "./components/HRProfile";
import JobApplication from "./components/JobApplication";

import LoginRegPage from "./components/LoginRegistrationPage";
import LoginPage from "./components/Login";

import UserHomePage from "./components/UserHome";
import UserProf from "./components/UserProfile";
import UserJobs from "./components/UserJobs";
import UserMeetings from "./components/UserMeetings";
import UserCompanies from "./components/UserCompanies";
import UserSettings from "./components/UserSettings";

import Registration from "./components/registration";
import Resetpassword from "./pages/ResetPassword";

import "./css/style.css";

function App() {
  const [userToken, setUserToken] = useState(null);
  const [hrToken, setHrToken] = useState(null);
  useEffect(() => {
    const MyUserToken = localStorage.getItem("user-auth-key");
    const MyHrToken = localStorage.getItem("hr-auth-key");
    if (MyUserToken) {
      setUserToken(MyUserToken);
    }
    if (MyHrToken) {
      setHrToken(MyHrToken);
    }
  }, []);

  if (hrToken !== null && userToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HrHome />} />
          <Route exact path="/hr" element={<HrHome />} />

          <Route path="/meethome" element={<Meethome />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route exact path="/assesmentest" element={<QuestionBox />} />

          <Route path="/hrPro" element={<HrProfile />} />
          <Route path="/jobapp" element={<JobApplication />} />
        </Routes>
      </BrowserRouter>
    );
  }
  if (userToken !== null && hrToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserHomePage />} />
          <Route path="/profile" element={<UserProf />} />
          <Route path="/jobs" element={<UserJobs />} />
          <Route path="/meetings" element={<UserMeetings />} />
          <Route path="/companies" element={<UserCompanies />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </BrowserRouter>
    );
  }
  if (userToken === null && hrToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/*login*/}
          <Route path="/logreg" element={<LoginRegPage />} />
          {/* Optional login */}
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Registraton */}

          <Route path="/reg" element={<Registration />} />
          {/* Resetpassword */}
          <Route path="/reset-password" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
