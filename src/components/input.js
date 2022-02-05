import React from "react";
import { Input } from "../garth";

const code = `
<Input id="name" inputRef={ref} name="name" placeholder="Name" type="text" />
`;

const component = () => <Input id="name" name="name" type="text" />;

const object = {
  code,
  component,
  description: "Input component for usage such as a semantic input.",
  name: "Input",
};

export default object;
