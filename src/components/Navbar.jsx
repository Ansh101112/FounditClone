import React from "react";
import { Text } from "@chakra-ui/react"; // Importing Text from Chakra UI
import { NavLink } from "react-router-dom";
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
      </div>
    </div>
  );
};

export default Navbar;
