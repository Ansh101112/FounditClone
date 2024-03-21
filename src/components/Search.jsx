import React, { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaMicrophone, FaSearch } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";

const Search = () => {
  const [jobData, setJobData] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");

  const handleFilter = (e) => {
    setValue(e.target.value);
    // Your filtering logic here
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
              height={35} borderRadius={23}
              px={"10px"}
              placeholder="Search by Skills, Company & Job Title"
              type="text"
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
            <FaMapMarkerAlt />
          </Box>
          <Box display={"flex"} alignItems={"center"}>
          <Input height={35} borderRadius={23} px={"10px"} placeholder="Location"/>
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
            <Input height={35} borderRadius={23} px={"10px"} placeholder="Experience" type="text" />
          </Box>
          <Box>
            <Button
              fontWeight={"bold"}
              color={"white"}
              backgroundColor={"#6e00be"}
              _hover={{ backgroundColor: "#6e00be" }}
              borderRadius={"58"}
              padding={"14px 28px"}
              onClick={handleFilter}
            >
              <Text fontSize={"sm"}>Search</Text>
            </Button>
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
