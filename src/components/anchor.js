import { Anchor } from "../garth";

const ComponentName = () => {
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

const code = `
<Anchor
  href="https://www.npmjs.com/package/garth"
  rel="noopener noreferrer"
  target="_blank"
>
  View package on NPM
</Anchor>
`;

const description = `
Inline anchor component intended for links. Basic usage is as per a standard anchor element using a hypertext reference attribute.
`;

const object = {
  code,
  component: ComponentName,
  description,
  name: "Anchor",
};

export default object;
