import React, { useState } from "react";
import { Box, Button, Flex, Input, Text, Select } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import axios from "axios";

const Search = () => {
  const [jobData, setJobData] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [location, setLocation] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  // List of all Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleFilter = () => {
    //will add soon
  };

  // // Function to handle location autocomplete
  // const handleLocationAutocomplete = async (input) => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.geoapify.com/v1/places/autocomplete?text=${input}&apiKey=bf3316b4f7b04a22a4763b63ef835e5b`
  //     );
  //     const locations = response.data.features.map((feature) => feature.properties.name);
  //     setFilteredLocations(locations);
  //   } catch (error) {
  //     console.error("Error fetching locations:", error);
  //   }
  //   setLocation(input);
  // };

  // const handleLocationSelect = (selectedLocation) => {
  //   setLocation(selectedLocation);
  //   setFilteredLocations([]);
  // };

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
          <Box
            width="40px"
            justifyContent={"center"}
            paddingLeft="15px"
            size={"55px"}
            display={"flex"}
            alignItems={"center"}
            color={"purple"}
          >
            <FaSearch />
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Input
              variant="unstyled"
              width={"300px"}
              height={35}
              borderRadius={23}
              px={"10px"}
              placeholder="Search by Skills, Company & Job Title"
              type="text"
              className=" w-56 border border-purple-600 rounded-lg px-3 cursor-pointer text-black-600"
              onChange={handleFilter}
            />
          </Box>
          <Box
            width="40px"
            justifyContent={"center"}
            paddingLeft="15px"
            size={"55px"}
            display={"flex"}
            alignItems={"center"}
            color={"purple"}
          >
            <FaMicrophone />
          </Box>
          <Box display={"flex"} alignItems={"center"} position="relative">
            {/* Dropdown for selecting location */}
            <Select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Select Location"
              height={35}
              borderRadius={23}
              className="appearance-none w-46 border border-purple-600 rounded-lg px-3 cursor-pointer text-black-600  "
              bg="white"
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
            >
              {/* Options for all Indian states */}
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Box>

          <Box
            width="40px"
            justifyContent={"center"}
            borderLeft={"1px solid"}
            paddingLeft="15px"
            size={"55px"}
            display={"flex"}
            alignItems={"center"}
            color={"purple"}
          >
            <TiShoppingBag />
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Select
              height={35}
              borderRadius={23}
              px={"10px"}
              placeholder="Experience"
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="appearance-none w-56 border border-purple-600 rounded-lg px-3 cursor-pointer text-zinc-600 focus:outline-none focus:border-purple-600"
            >
              <option
                value="1"
                className="text-purple-600 font-semibold rounded-lg"
              >
                0-1 year
              </option>
              <option value="2" className="text-purple-600 font-semibold">
                1-2 years
              </option>
              <option value="3" className="text-purple-600 font-semibold">
                2-3 years
              </option>
              <option value="4" className="text-purple-600 font-semibold">
                3-4 years
              </option>
              <option value="5" className="text-purple-600 font-semibold">
                5+ years
              </option>
            </Select>
          </Box>
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

      {showBox && (
        <Box
          border={"1px solid purple"}
          borderRadius={5}
          w={"25%"}
          ml={180}
          p={2}
          backgroundColor={"white"}
          overflow={"hidden"}
          zIndex={"999"}
          position={"absolute"}
        >
          {jobData.map((item) => (
            <Box key={item.id}>
              <Flex p={1} justifyContent={"space-between"}>
                <Box textAlign={"start"}>
                  <Text fontWeight={"semibold"} color={"purple"}>
                    {item.job_title}
                  </Text>
                  <Text fontSize={"xx-small"}>Job Id : {item._id}</Text>
                </Box>
                <Box h={10} w={20}>
                  <Image src={item.image} />
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Search;
