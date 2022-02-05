import React from "react";
import { Checkable } from "../garth";

const code = `
<Checkable id="checkbox" inputRef={ref} name="checkbox" type="checkbox">
  Checkbox
</Checkable>
`;

const component = () => {
  return (
    <Checkable id="checkbox" name="checkbox" type="checkbox">
      Checkbox
    </Checkable>
  );
};

const object = {
  code,
  component,
  description: "Checkable component used as a checkbox.",
  name: "Checkable (checkbox)",
};

export default object;
