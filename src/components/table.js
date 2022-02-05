import React from "react";
import { Table } from "../garth";

const code = `
<Table>
  <caption>Meaningful table caption.</caption>
  <thead>
    <tr>
      <th>Index</th>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Garth</td>
    </tr>
  </tbody>
</Table>
`;

const component = () => (
  <Table>
    <caption>Meaningful table caption.</caption>
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0</td>
        <td>Garth</td>
      </tr>
    </tbody>
  </Table>
);

const object = {
  code,
  component,
  description: "Styled table component. Bring your own semantic table.",
  name: "Table",
};

export default object;
