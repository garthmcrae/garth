import React from "react";
import { Anchor } from "../garth";

const code = `
<Anchor href="https://www.npmjs.com/package/garth" rel="noopener noreferrer" target="_blank">
  View package on NPM
</Anchor>
`;

const component = () => {
  return (
    <Anchor
      href="https://www.npmjs.com/package/garth"
      rel="noopener noreferrer"
      target="_blank"
    >
      View package on NPM
    </Anchor>
  );
};

const description = `
Inline anchor component intended for links. Basic usage is as per a standard anchor element using a hypertext reference attribute.
`;

const object = {
  code,
  component,
  description,
  name: "Anchor",
};

export default object;
