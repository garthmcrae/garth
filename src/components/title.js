import React from "react";
import { Title } from "../garth";

const code = `
<Title element="h3">Garth</Title>
`;

const component = () => <Title element="h3">Garth</Title>;

const object = {
  code,
  component,
  description:
    "Titles for content. Default element is h2 and yes all titles are the same size.",
  name: "Title",
};

export default object;
