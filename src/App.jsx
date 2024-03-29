import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import JobModal from "./Pages/JobModal";
import Dashboard from "./Pages/Dashboard";
import UserDashboard from "./Pages/UserDashboard";

const App = () => {
  const postJobs = async (jobDetails) => {
    await db.collection('jobs').add({
      ...jobDetails,
      postedOn: app.db.FieldValue.serverTimestamp()
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-posting" element={<JobModal postJobs={postJobs} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<Dashboard name='Ansh' />} />
        <Route path="/user/dashboard" element={<UserDashboard name='User' />} />
        <Route path="/employerlogin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </>
  );
};

export default App;
