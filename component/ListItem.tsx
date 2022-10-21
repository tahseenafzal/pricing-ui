import { HStack, Icon, Text, StackProps } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

const ListItem = (props: StackProps) => {
  const { children } = props;
  return (
    <HStack as="li" gap={["6px", "6px", "5"]}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text fontSize="lg">{children}</Text>
    </HStack>
  );
};

export default ListItem;
