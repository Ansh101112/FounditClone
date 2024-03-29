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
            <h3 className="text-xl font-semibold mb-4">Manage Jobs</h3>
            <p className="text-gray-600"><NavLink to='/job-posting'>View, add, or remove job postings.</NavLink></p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Analytics</h3>
            <p className="text-gray-600">View analytics and insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Settings</h3>
            <p className="text-gray-600">Manage account settings and preferences.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
