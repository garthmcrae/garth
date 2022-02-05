import React from "react";
import { Button } from "../garth";

const code = `
<Button onClick={() => alert('Hello Garth!')}>
  Say hello
</Button>
`;

const component = () => {
  return (
    <Button onClick={() => alert("Hello Garth!")} type="button">
      Say hello
    </Button>
  );
};

const description = `
Button component for usage such as a semantic button.
`;

const object = {
  code,
  component,
  description,
  name: "Button",
};

export default object;
