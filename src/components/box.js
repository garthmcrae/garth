import React from "react";
import { Box, Paragraph } from "../garth";

const code = `
<Box>
  <Paragraph>Paragraph within a box.</Paragraph>
</Box>
`;

const component = () => {
  return (
    <Box>
      <Paragraph>Paragraph within a box.</Paragraph>
    </Box>
  );
};

const object = {
  code,
  component,
  description:
    "Boxes hold content and are the building blocks of layouts. Boxes can be adaptive (stack on mobile), fluid (fit to width) or solid (fit to content). Boxes can also be passive (no padding). Widths can also be specified. Boxes also remove margin front the first and last child.",
  name: "Box",
};

export default object;
