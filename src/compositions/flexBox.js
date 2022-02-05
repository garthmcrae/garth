import React from "react";
import { Box, Flex, Paragraph } from "../garth";

const code = `
<Flex>
  <Box>
    <Paragraph>Box A.</Paragraph>
  </Box>
  <Box>
    <Paragraph>Box B.</Paragraph>
  </Box>
</Flex>
`;

const component = () => {
  return (
    <Flex>
      <Box>
        <Paragraph>Box A.</Paragraph>
      </Box>
      <Box>
        <Paragraph>Box B.</Paragraph>
      </Box>
    </Flex>
  );
};

const object = {
  code,
  component,
  description:
    "Flex is used for the layout of Boxes. By default flex direction is row and Flex is unresponsive. Boxes have no flex behaviour by default.",
  name: "Flex and Box",
};

export default object;
