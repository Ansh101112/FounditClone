import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import JobModal from "./Pages/JobModal";
import Dashboard from "./Pages/Dashboard";
import UserDashboard from "./Pages/UserDashboard";

const App = () => {
    
  const postJobs = async (jobDetails)=>{
    await db.collection('jobs').add({
      ...jobDetails,
      postedOn: app.db.FieldValue.serverTimeStamp()})
  }
  return (

// All routing here

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/job-posting" element={<JobModal postJobs={postJobs}></JobModal>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/admin/dashboard" element={<Dashboard name='ansh'></Dashboard>} />
        <Route path="/user/dashboard" element={<UserDashboard></UserDashboard>} />
        <Route path="/employerlogin" element={<Login></Login>} />
      </Routes>
  );
};

export default App;
