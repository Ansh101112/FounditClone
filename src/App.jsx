import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (

// All routing here

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Login></Login>} />
        <Route path="/employerlogin" element={<Login></Login>} />
      </Routes>
  );
};

export default App;
