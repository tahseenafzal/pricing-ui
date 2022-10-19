import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="section"
      bg="#6B46C1"
      color="#F7FAFC"
      pt="88.45px"
      pb="198px"
      px="24px"
      textAlign={["left", "left", "center"]}
    >
      <Heading fontWeight="800" fontSize="48px">
        Simple pricing for your business
      </Heading>
      <Text fontWeight="500" fontSize="24px" pt="16.08px">
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
};

export default Header;
