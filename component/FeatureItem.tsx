import { HStack, Text, StackProps, Icon } from "@chakra-ui/react";
import React from "react";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const FeatureItem = (props: FeatureProps) => {
  const { children, icon } = props;
  return (
    <HStack gap={["6px", "6px", "5"]}>
      <Icon as={icon} boxSize={["6", "6", "12"]} />
      <Text fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

export default FeatureItem;
