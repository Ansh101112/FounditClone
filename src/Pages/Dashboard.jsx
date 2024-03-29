import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome {props.name} to Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Add Jobs</h3>
            <p className="text-gray-600"><NavLink to='/job-posting'>Post a new Job.</NavLink></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Edit a Job</h3>
            <p className="text-gray-600"><a href='https://console.firebase.google.com/u/0/project/jobproject-649ea/overview' >Remove or edit an existing job</a></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Settings</h3>
            <p className="text-gray-600"><a href='https://console.firebase.google.com/u/0/project/jobproject-649ea/overview' >Manage account settings and preferences.</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
