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
      <Box width="solid">
        <Paragraph>Box A.</Paragraph>
      </Box>
      <Box width="fluid">
        <Paragraph>Box B.</Paragraph>
      </Box>
    </Flex>
  );
};

const object = {
  code,
  component,
  description: "Widths can added to Boxes.",
  name: "Flex and Box width",
};

export default object;
