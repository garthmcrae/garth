import React from "react";
import { Anchor } from "../garth";

const code = `
<Anchor element="button" onClick={() => alert('Hello Garth!')} type="button">
  Say hello
</Anchor>
`;

const component = () => {
  return (
    <Anchor
      element="button"
      onClick={() => alert("Hello Garth!")}
      type="button"
    >
      Say hello
    </Anchor>
  );
};

const description = `
Inline anchor component with element property passed for usage such as a semantic button.
`;

const object = {
  code,
  component,
  description,
  name: "Anchor (semantic button)",
};

export default object;
