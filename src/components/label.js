import React from "react";
import { Label } from "../garth";

const code = `
<Label htmlFor="name">Name</Label>
`;

const component = () => <Label htmlFor="name">Name</Label>;

const object = {
  code,
  component,
  description: "Form input label.",
  name: "Label",
};

export default object;
