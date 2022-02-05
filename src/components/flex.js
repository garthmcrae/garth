import React from "react";
import { Box, Flex, Paragraph } from "../garth";

const code = `
<Flex wrap>
  <Box adaptive width="6">
    <Paragraph>Content in the first column.</Paragraph>
  </Box>
  <Box adaptive width="6">
    <Paragraph>Content in the second column.</Paragraph>
  </Box>
</Flex>
`;

const component = () => {
  return (
    <Flex wrap>
      <Box adaptive width="6">
        <Paragraph>Content in the first column.</Paragraph>
      </Box>
      <Box adaptive width="6">
        <Paragraph>Content in the second column.</Paragraph>
      </Box>
    </Flex>
  );
};

const object = {
  code,
  component,
  description: "Flex component for the layout of box components.",
  name: "Flex",
};

export default object;
