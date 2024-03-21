import React from "react";
import { Button, Text } from "@chakra-ui/react"; // Importing Button and Text from Chakra UI
import { Link } from "react-router-dom";
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
          Jobs
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
            Network
        </Text>
      </div>
      <div className="flex items-center">
        <Button
          colorScheme="blue"
          className="border-1-red mr-4"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          colorScheme="red"
          className="mr-4"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </Button>
        <div className="border-l border-gray-400 h-6 mx-4"></div> {/* Vertical line */}
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
