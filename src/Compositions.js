import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Border,
  Box,
  Button,
  Expand,
  Flex,
  Paragraph,
  Rule,
  Typography,
} from "./garth";
import Example from "./Example";
import navigationItems from "./navigationItems";
import flexBox from "./compositions/flexBox";
import flexBoxAdaptive from "./compositions/flexBoxAdaptive";
import flexBoxAdaptiveWidth from "./compositions/flexBoxAdaptiveWidth";

const Item = ({ children }) => (
  <Border>
    <Box>
      <Paragraph>{children}</Paragraph>
    </Box>
  </Border>
);

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box>
        <Paragraph element="h1">2. Compositions</Paragraph>
        <Typography size={[3, 4]}>
          Compositions using component and layout variations.
        </Typography>
      </Box>
      <Box>
        <Rule />
      </Box>
      <Example {...flexBox} />
      <Example {...flexBoxAdaptive} />
      <Example {...flexBoxAdaptiveWidth} />
      <Box>
        <Button onClick={(_) => setOpen(!open)}>Menu</Button>
      </Box>
      <Expand expand={open}>
        {navigationItems.map(({ label, path }) => (
          <Box key={`expand-${label}`}>
            <Button tabIndex={open ? "0" : "-1"} element={Link} to={path}>
              {label}
            </Button>
          </Box>
        ))}
      </Expand>
      <Box>
        <Rule />
      </Box>
      {navigationItems.map(({ label, path }) => (
        <Box key={`box-${label}`}>
          <Button element={Link} to={path}>
            {label}
          </Button>
        </Box>
      ))}
      <Box>
        <Rule />
      </Box>
      <Flex wrap>
        {navigationItems.map(({ label, path }) => (
          <Box key={`wrap-${label}`}>
            <Button element={Link} to={path}>
              {label}
            </Button>
          </Box>
        ))}
      </Flex>
      <Box>
        <Rule />
      </Box>
      <Flex wrap>
        {navigationItems.map(({ label, path }) => (
          <Box fluid key={`fluid-${label}`}>
            <Button element={Link} to={path}>
              {label}
            </Button>
          </Box>
        ))}
      </Flex>
      <Box>
        <Rule />
      </Box>
      <Flex wrap>
        {navigationItems.map(({ label, path }) => (
          <Box adaptive key={`adaptive-${label}`}>
            <Button element={Link} to={path}>
              {label}
            </Button>
          </Box>
        ))}
      </Flex>
      <Box>
        <Rule />
      </Box>
      <Flex wrap>
        {navigationItems.map(({ label, path }) => (
          <Box adaptive key={`adaptive-width-${label}`} width="3">
            <Button element={Link} to={path}>
              {label}
            </Button>
          </Box>
        ))}
      </Flex>
      <Box>
        <Rule />
      </Box>
      <Box>
        <Paragraph>Box variations.</Paragraph>
      </Box>
      <Box>
        <Item>Box</Item>
      </Box>
      <Box fluid>
        <Item>Box fluid</Item>
      </Box>
      <Box solid>
        <Item>Box solid</Item>
      </Box>
      <Box adaptive>
        <Item>Box adaptive</Item>
      </Box>
      <Box>
        <Paragraph>Box inside Flex.</Paragraph>
      </Box>
      <Flex>
        <Box>
          <Item>Box</Item>
        </Box>
        <Box>
          <Item>Box</Item>
        </Box>
      </Flex>
      <Box>
        <Paragraph>Box fluid and solid inside Flex.</Paragraph>
      </Box>
      <Flex>
        <Box fluid>
          <Item>Box fluid</Item>
        </Box>
        <Box solid>
          <Item>
            <span style={{ whiteSpace: "nowrap" }}>Box solid</span>
          </Item>
        </Box>
      </Flex>
      <Box>
        <Paragraph>Box width inside Flex.</Paragraph>
      </Box>
      <Flex>
        <Box width={4}>
          <Item>Box width 4</Item>
        </Box>
        <Box width={8}>
          <Item>Box width 8</Item>
        </Box>
      </Flex>
      <Box>
        <Paragraph>Box adaptive inside Flex wrap.</Paragraph>
      </Box>
      <Flex wrap>
        <Box adaptive width={6}>
          <Item>Box width 6</Item>
        </Box>
        <Box adaptive width={6}>
          <Item>Box width 6</Item>
        </Box>
      </Flex>
    </>
  );
};

export default Page;
