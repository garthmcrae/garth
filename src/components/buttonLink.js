import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../garth";

const code = `
<Button element={Link} to="/">
  Home
</Button>
`;

const component = () => {
  return (
    <Button element={Link} to="/">
      Home
    </Button>
  );
};

const description = `
Button component with 'Link' passed as 'element' for use with 'react-router-dom'.
`;

const object = {
  code,
  component,
  description,
  name: "Button ('react-router-dom' 'Link')",
};

export default object;
