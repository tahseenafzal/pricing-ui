import React from "react";
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";

const Price = () => {
  return (
    <Box>
      <Flex>
        <Box p="60px" bg="#F0EAFB" textAlign="center">
          <Text fontWeight="800" fontSize="24px">
            Premium PRO
          </Text>
          <Heading as="h3" fontSize="60px" mt="16px">
            $329
          </Heading>
          <Text color="#171923" fontSize="18px" fontWeight="500" mt="8px">
            Billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
};

export default Price;
