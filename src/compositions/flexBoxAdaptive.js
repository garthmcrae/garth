import React from "react";
import { Box, Flex, Paragraph } from "../garth";

const code = `
<Flex wrap>
  <Box adaptive>
    <Paragraph>Box A.</Paragraph>
  </Box>
  <Box adaptive>
    <Paragraph>Box B.</Paragraph>
  </Box>
</Flex>
`;

const component = () => {
  return (
    <Flex wrap>
      <Box adaptive>
        <Paragraph>Box A.</Paragraph>
      </Box>
      <Box adaptive>
        <Paragraph>Box B.</Paragraph>
      </Box>
    </Flex>
  );
};

const object = {
  code,
  component,
  description:
    "Flex with the wrap property and Boxes with the adaptive property are stacked by default and laid out in columns on larger screen sizes (minimum width 768px).",
  name: "Flex wrap and Box adaptive",
};

export default object;
