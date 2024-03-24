import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Input, Text, Select } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import axios from "axios";
import { DistrictData } from "../Data/DistrictData";
import { LocalityData } from "../Data/LocalityData.jsx"; // Import locality data
import { StateData } from "../Data/StateData.jsx"; // Import locality data

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
    // Implement filtering logic
  };

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
          <Box display={"flex"} alignItems={"center"}>
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
              {/* Options for all districts */}
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </Select>
          </Box>

          {/* Locality dropdown */}
          <Box display={"flex"} alignItems={"center"}>
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
    {selectedDistrict &&
      LocalityData.localities.map((locality) => (
        <option key={locality.pincode} value={locality.name}>
          {locality.name}
        </option>
      ))}
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
