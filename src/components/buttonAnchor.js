import React from "react";
import { Button } from "../garth";

const code = `
<Button element="a" href="https://www.npmjs.com/package/garth" rel="noopener noreferrer" target="_blank">
  View package on NPM
</Button>
`;

const component = () => {
  return (
    <Button
      element="a"
      href="https://www.npmjs.com/package/garth"
      rel="noopener noreferrer"
      target="_blank"
    >
      View package on NPM
    </Button>
  );
};

const description = `
Button component with element property passed for usage such as a semantic anchor.
`;

const object = {
  code,
  component,
  description,
  name: "Button (semantic anchor)",
};

export default object;
