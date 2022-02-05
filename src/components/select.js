import React from "react";
import { Select } from "../garth";

const code = `
<Select
  name="options"
  options={[
    {
      label: "Select",
      value: "",
    },
    {
      label: "Option 1",
      value: "1",
    },
    {
      label: "Option 2",
      value: "2",
    },
  ]}
/>
`;

const component = () => (
  <Select
    name="options"
    options={[
      {
        label: "Select",
        value: "",
      },
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
    ]}
  />
);

const object = {
  code,
  component,
  description:
    "Experimental component. Select built from styled radio buttons. Input ref can be passed with props object to each radio option.",
  name: "Select",
};

export default object;
