import React from "react";
import { Box, Flex, Paragraph } from "../garth";

const code = `
<Flex wrap>
  <Box adaptive width={6}>
    <Paragraph>Box A.</Paragraph>
  </Box>
  <Box adaptive width={6}>
    <Paragraph>Box B.</Paragraph>
  </Box>
</Flex>
`;

const component = () => {
  return (
    <Flex wrap>
      <Box adaptive width={6}>
        <Paragraph>Box A.</Paragraph>
      </Box>
      <Box adaptive width={6}>
        <Paragraph>Box B.</Paragraph>
      </Box>
    </Flex>
  );
};

const object = {
  code,
  component,
  description:
    "Flex with the wrap property and Boxes with the adaptive property are stacked by default and laid out in columns on larger screen sizes (minimum width 768px). Widths can be defined based on a 12 column grid.",
  name: "Flex wrap and Box adaptive width",
};

export default object;
