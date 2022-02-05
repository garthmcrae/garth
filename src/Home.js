import React from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Button,
  Border,
  Box,
  Container,
  Flex,
  Paragraph,
  Title,
} from "./garth";
import Code from "./Code";

const Home = () => {
  return (
    <div>
      <Container>
        <Box>
          <Title element="h1">Version {process.env.REACT_APP_VERSION}</Title>
          <Paragraph>
            Responsive, mobile-first user interface components for{" "}
            <Anchor href="https://reactjs.org/">React</Anchor>.
          </Paragraph>
          <Paragraph>
            Garth is a user interface library by Garth for Garth.
          </Paragraph>
        </Box>
        <Box>
          <Border>
            <Box>
              <Paragraph>
                <strong>Note</strong> — Garth documentation is a work in
                progress.
              </Paragraph>
            </Box>
          </Border>
        </Box>
        <Box>
          <Code code="npm install --save garth" language="bash" />
        </Box>
        <Flex wrap>
          <Box adaptive width={6}>
            <Button element={Link} to="/components">
              View components
            </Button>
          </Box>
        </Flex>
      </Container>
    </div>
  );
};

export default Home;
