import React from 'react';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';

const UserDashboard = (props) => {
  const { userName } = props;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome {userName} to your Dashboard</h2>
        <div className="flex justify-center">
          <NavLink to="/" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300">
            View Current Jobs
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
