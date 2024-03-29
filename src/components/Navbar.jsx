import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig"; // Importing auth from Firebase

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // State to track the authenticated user
  const [showDropdown, setShowDropdown] = useState(false); // State to track dropdown visibility

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state when authentication state changes
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  const handleLogout = () => {
    auth.signOut(); // Sign out the user
    navigate('/login'); // Navigate to the login page after logout
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      navigate('/login')
    } catch (error) {
      alert("Try again after sometime.", error)
    }
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-2 px-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <img
          src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"
          alt="Company Logo"
          width="130px"
          height="25px"
          className="mr-4 p-4 cursor-pointer"
          borderRadius={'55'}
          onClick={() => { navigate('/') }}
        />
        <Text
          fontSize="lg"
          fontWeight="bold"
          mt="10px"
          cursor="pointer"
          borderBottom="2px solid transparent"
          _hover={{ borderBottom: "2px solid #6e00be" }}
          className="mr-4"
        >
          Boost
        </Text>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mt="10px"
          cursor="pointer"
          borderBottom="2px solid transparent"
          _hover={{ borderBottom: "2px solid #6e00be" }}
          className="mr-4"
        >
          Prep
        </Text>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mt="10px"
          cursor="pointer"
          borderBottom="2px solid transparent"
          _hover={{ borderBottom: "2px solid #6e00be" }}
          className="mr-4"
        >
          Learn
        </Text>
        {user && user.email === 'admin@jr.com' && (
          <NavLink to='/job-posting'>
            <Text
              fontSize="lg"
              fontWeight="bold"
              mt="10px"
              cursor="pointer"
              borderBottom="2px solid transparent"
              _hover={{ borderBottom: "2px solid #6e00be" }}
              className="mr-4"
            >
              Post a Job
            </Text>
          </NavLink>
        )}
      </div>
      {user ? (
        <div>
          <div className="relative">
            <Text
              fontSize="lg"
              fontWeight="bold"
              mt="10px"
              cursor="pointer"
              className="mr-4 text-black"
              onClick={toggleDropdown}
            >
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Profile
              </button> 
            </Text>
            {showDropdown && (
  <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-10">
    {user && user.email === 'admin@jr.com' ? (
      <>
        <NavLink to="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Admin Dashboard</NavLink>
        <div className="border-t border-gray-200"></div>
        <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
      </>
    ) : (
      <>
        <NavLink to="/user/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">User Dashboard</NavLink>
        <div className="border-t border-gray-200"></div>
        <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Logout</button>
      </>
    )}
  </div>
)}

          </div>
        </div>
      ) : (
        <button onClick={handleSubmit} type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Login</button>
      )}
    </div>
  );
};

export default Navbar;
