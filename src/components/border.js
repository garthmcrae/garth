import React from "react";
import { Box, Border, Paragraph } from "../garth";

const code = `
<Border>
  <Box>
    <Paragraph>This content is wrapped in a border.</Paragraph>
  </Box>
</Border>
`;

const component = () => {
  return (
    <Border>
      <Box>
        <Paragraph>This content is wrapped in a border.</Paragraph>
      </Box>
    </Border>
  );
};

const description = `
Border component for adding borders around components.
`;

const object = {
  code,
  component,
  description,
  name: "Border",
};

export default object;
