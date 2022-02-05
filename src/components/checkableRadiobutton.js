import React from "react";
import { Checkable } from "../garth";

const code = `
<Checkable id="radio" inputRef={ref} name="radio" type="radio">
  Radio button
</Checkable>
`;

const component = () => {
  return (
    <Checkable id="radio" name="radio" type="radio">
      Radio button
    </Checkable>
  );
};

const object = {
  code,
  component,
  description: "Checkable component used as a radio button.",
  name: "Checkable (radio button)",
};

export default object;
