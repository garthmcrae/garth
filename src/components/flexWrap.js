import React from "react";
import { Border, Box, Flex, Paragraph } from "../garth";

const code = `
<Flex>
  <Box>
    <Paragraph>Content in the first column.</Paragraph>
  </Box>
  <Box>
    <Paragraph>Content in the second column.</Paragraph>
  </Box>
</Flex>
`;

const component = () => {
  return (
    <Flex>
      <Box>
        <Paragraph>Content in the first column.</Paragraph>
      </Box>
      <Box>
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
