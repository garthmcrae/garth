import React from "react";
import { Paragraph } from "../garth";

const code = `
<Paragraph>A paragraph.</Paragraph>
`;

const component = () => <Paragraph>A paragraph.</Paragraph>;

const object = {
  code,
  component,
  description: "Component for paragraphs of text.",
  name: "Paragraph",
};

export default object;
