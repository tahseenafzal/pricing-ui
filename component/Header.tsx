import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="section"
      bg="purple.600"
      color="gray.50"
      pt={["14", "14", "24"]}
      pb="198px"
      px="6"
      textAlign={["left", "left", "center"]}
    >
      <Heading fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
        Simple pricing for your business
      </Heading>
      <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
        Plans that are carefully crafted to suit your business
      </Text>
    </Box>
  );
};

export default Header;
