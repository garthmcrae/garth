import React from "react";
import { Box, Container, Paragraph, Typography } from "./garth";
import Code from "./Code";

const Start = () => {
  return (
    <div>
      <Container>
        <Box>
          <Paragraph element="h1">0. Start</Paragraph>
          <Typography size={[3, 4]}>
            Garth is a responsive user interface library by Garth for Garth.
          </Typography>
        </Box>
        <Box>
          <Paragraph>Install with NPM.</Paragraph>
          <Code code="npm install --save garth" language="bash" />
        </Box>
        <Box>
          <Paragraph>Install with Yarn.</Paragraph>
          <Code code="yarn add garth" language="bash" />
        </Box>
      </Container>
    </div>
  );
};

export default Start;
