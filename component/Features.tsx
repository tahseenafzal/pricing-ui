import FeatureItem from "./FeatureItem";
import {
  MoneyBackIcon,
  MonthlySubscribeIcon,
  HassleFreeIcon,
} from "../icons/Icons";
import { Stack, Box } from "@chakra-ui/react";

const Features = () => {
  return (
    <Box as="section" maxW="1024px" pt="60px" pb="8" m="auto">
      <Stack
        direction={["column", "column", "row"]}
        px={["6", "6", "12"]}
        spacing={["6", "6", "5"]}
      >
        <FeatureItem icon={MoneyBackIcon}>
          30 days money back Guarantee
        </FeatureItem>
        <FeatureItem icon={HassleFreeIcon}>
          No setup fees 100% hassle-free
        </FeatureItem>
        <FeatureItem icon={MonthlySubscribeIcon}>
          No monthly subscription Pay once and for all
        </FeatureItem>
      </Stack>
    </Box>
  );
};

export default Features;
