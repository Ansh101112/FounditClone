import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, Select } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import axios from "axios";
import { DistrictData } from "../Data/DistrictData";
import { LocalityData } from "../Data/LocalityData.jsx"; // Import locality data
import { StateData } from "../Data/StateData.jsx"; // Import locality data
import { FaLocationArrow } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Search = () => {
  const [selectedState, setSelectedState] = useState(""); // State selection
  const [selectedDistrict, setSelectedDistrict] = useState(""); // District selection
  const [selectedLocality, setSelectedLocality] = useState(""); // Locality selection
  const [districts, setDistricts] = useState([]);
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    // Fetch all districts when component mounts
    const allDistricts = DistrictData.flat().map((district) => district.district);
    setDistricts(allDistricts);
  }, []);

  useEffect(() => {
    // Update localities when district changes
    if (selectedDistrict) {
      setLocalities(LocalityData[selectedDistrict] || []);
    } else {
      setLocalities([]);
    }
  }, [selectedDistrict]);

  const handleFilter = () => {
    if (selectedState === "Uttar Pradesh" && selectedDistrict === "Gorakhpur") {
      // Filter based on Gorakhpur district in Uttar Pradesh
      // Show only locality data for Gorakhpur
      setLocalities(LocalityData[selectedDistrict] || []);
    } else if (selectedState === "Uttar Pradesh") {
      // Filter based on Uttar Pradesh state
      // Show only district data for Uttar Pradesh
      const allDistricts = DistrictData.flat().map((district) => district.district);
      setDistricts(allDistricts);
      setLocalities([]); // Clear locality data
    } else {
      // Reset filters if neither Uttar Pradesh nor Gorakhpur district is selected
      setSelectedDistrict("");
      setSelectedLocality("");
      setDistricts([]);
      setLocalities([]);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [selectedState, selectedDistrict]);
  

  return (
    <Box backgroundColor={"#f7f2f9"} p={58}>
      <Flex alignItems="center" marginBottom={4}>
        <Text
          fontWeight={"bold"}
          color={"black"}
          height={"100%"}
          marginRight={4}
        >
          Over 5,00,000+ <br /> jobs to explore
        </Text>
        <Flex
          justifyContent={"space-between"}
          border={"1px solid gray"}
          borderRadius={"58"}
          flex={1}
        >
        <Box display={"flex"} alignItems={"center"}>
        <FaLocationArrow className="m-2"/>
  {/* State dropdown */}
  <Select
    value={selectedState}
    onChange={(e) => {
      setSelectedState(e.target.value);
      setSelectedDistrict(""); // Reset selected district when state changes
      setSelectedLocality(""); // Reset selected locality when state changes
    }}
    placeholder="Select State"
    height={35}
    borderRadius={23}
    className="appearance-none w-46 border border-purple-600 rounded-lg px-3 cursor-pointer text-black-600  "
    bg="white"
    cursor="pointer"
    _hover={{ bg: "gray.100" }}
  >
    {/* Options for all Indian states */}
    {StateData.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </Select>
</Box>
          {/* District dropdown */}
         {/* District dropdown */}
<Box display={"flex"} alignItems={"center"}>
  <FaMapLocationDot className="m-2 size-6"/>
  <Select
    value={selectedDistrict}
    onChange={(e) => setSelectedDistrict(e.target.value)}
    placeholder="Select District"
    height={35}
    borderRadius={23}
    className="appearance-none w-46 border border-purple-600 rounded-lg px-3 cursor-pointer text-black-600  "
    bg="white"
    cursor="pointer"
    _hover={{ bg: "gray.100" }}
  >

    {selectedState === "Uttar Pradesh" ? (
      districts.map((district) => (
        <option key={district} value={district}>
          {district}
        </option>
      ))
    ) : (
      <option value="">No districts available for this state</option>
    )}
  </Select>
</Box>

          {/* Locality dropdown */}
<Box display={"flex"} alignItems={"center"}>
  <FaLocationCrosshairs className="m-2 size-6"/>
  <Select
    value={selectedLocality}
    onChange={(e) => setSelectedLocality(e.target.value)}
    placeholder="Select Locality"
    height={35}
    borderRadius={23}
    className="appearance-none w-46 border border-purple-600 rounded-lg px-3 cursor-pointer text-black-600  "
    bg="white"
    cursor="pointer"
    _hover={{ bg: "gray.100" }}
  >
    {/* Options for localities based on selected district */}
    {selectedDistrict === "Gorakhpur" && LocalityData.localities ? (
      LocalityData.localities.map((locality) => (
        <option key={locality.pincode} value={locality.name}>
          {locality.name}
        </option>
      ))
    ) : (
      <option value="">No localities available</option>
    )}
  </Select>
</Box>




          {/* Search button */}
          <Box>
            <button
              type="submit"
              className="[object Object] disabled:text-[#FFFFFF]} search_submit_btn absolute bottom-0 inline-flex h-11 w-full items-center justify-center gap-1 rounded rounded-md border border-[#6E00BE] bg-[#6E00BE] !p-0 !px-0 px-3 py-2 text-sm font-semibold text-[#fff] hover:shadow-md active:bg-[#580098] disabled:border-[#D2D1D6] disabled:bg-[#D2D1D6] lg:relative lg:flex lg:h-full lg:w-[162px] lg:min-w-[32px] lg:cursor-pointer lg:items-center lg:justify-center lg:rounded-full"
            >
              <span className="inline-block font-semibold">Search</span>
            </button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Search;
