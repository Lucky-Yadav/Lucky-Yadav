import React from "react";
import Topbar from "./components/topbar/Topbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {/* Route for Login Component */}
        <Route path="/login" element={<Login />}></Route>

        {/* Route for Signup Component */}
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
};

export default App;
