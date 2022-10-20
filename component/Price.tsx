import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Icon,
  StackProps,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing={5} {...rest} align="flex-start">
      <Icon as={CheckIcon} w="22px" h="22px" flexShrink={0} />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
};

const Price = () => {
  return (
    <Box
      shadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      borderRadius="12px"
      overflow="hidden"
      w="994px"
      m="auto"
      mt="-165px"
    >
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
        <Box p="40px" bg="white">
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Price;
