import React from "react";
import { Button, Text } from "@chakra-ui/react"; // Importing Button and Text from Chakra UI
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg"
          alt="Company Logo"
          width="130px"
          height="25px"
          className="mr-4 p-4 cursor-pointer"
          borderRadius={'55'}
          onClick={()=>{navigate('/')}}
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
        <Text
          fontSize="lg"
          fontWeight="bold"
          mt="10px"
          cursor="pointer"
          borderBottom="2px solid transparent"
          _hover={{ borderBottom: "2px solid #6e00be" }}
          className="mr-4"
        >
           <NavLink to='/job-posting'> Post a Job </NavLink>
        </Text>
      </div>
      <div className="flex items-center">
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={()=>{navigate("/login")}}>
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Login
</span>
</button>
    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=>{navigate("/signup")}}>Register</button>
        <div className="border-l border-gray-400 h-6 mx-4"></div>
        <Link
          to="/employerlogin"
          className="text-lg text-gray-700 font-bold mr-4 hover:border-b-2 hover:border-purple-700"
        >
          Employers Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
