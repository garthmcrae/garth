import React from "react";
import { Link } from "react-router-dom";
import { Anchor } from "../garth";

const code = `
<Anchor element={Link} to="/">
  Home
</Anchor>
`;

const component = () => {
  return (
    <Anchor element={Link} to="/">
      Home
    </Anchor>
  );
};

const description = `
Inline anchor component with 'Link' passed as 'element' for use with 'react-router-dom'.
`;

const object = {
  code,
  component,
  description,
  name: "Anchor ('react-router-dom' 'Link')",
};

export default object;
