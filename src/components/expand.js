import React, { useState } from "react";
import { Border, Box, Button, Expand } from "../garth";

const code = `
const Component = () => {
  const [open, setOpen] = useState(false);
  return (
    <Border>
      <Box>
        <Button onClick={() => setOpen(!open)} type="button">
          Toggle content visiblity
        </Button>
      </Box>
      <Expand expand={open}>
        <Box>
          <Button
            element="a"
            href="https://www.npmjs.com/package/garth"
            rel="noopener noreferrer"
            tabIndex={open ? '0' : '-1'}
            target="_blank"
          >
            View package on NPM
          </Button>
        </Box>
        <Box>
          <Button onClick={() => alert('Alert button clicked!')} disabled={!open} type="button">
            Alert
          </Button>
        </Box>
      </Expand>
    </Border>
  );
};
`;

const Component = () => {
  const [open, setOpen] = useState(false);
  return (
    <Border>
      <Box>
        <Button onClick={() => setOpen(!open)} type="button">
          Toggle content visiblity
        </Button>
      </Box>
      <Expand expand={open}>
        <Box>
          <Button
            element="a"
            href="https://www.npmjs.com/package/garth"
            rel="noopener noreferrer"
            tabIndex={open ? "0" : "-1"}
            target="_blank"
          >
            View package on NPM
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() => alert("Alert button clicked!")}
            disabled={!open}
            type="button"
          >
            Alert
          </Button>
        </Box>
      </Expand>
    </Border>
  );
};

const description = `
The expand component receives an expand property (boolean) to show or hide contents. Children that can be focused should have focus disabled based on the expanded state (see example).
`;

const object = {
  code,
  component: Component,
  description,
  name: "Expand",
};

export default object;
