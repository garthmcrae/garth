import { Box, Paragraph, Rule, Title } from "./garth";
import Code from "./Code";

const Example = ({ code, component, description, name }) => {
  const Component = component;
  return (
    <>
      <Box>
        <Title element="h2">{name}</Title>
        <Paragraph>{description}</Paragraph>
        <Code code={code.trim()} />
      </Box>
      {component && (
        <Box>
          <Component />
        </Box>
      )}
      <Box>
        <Rule />
      </Box>
    </>
  );
};

export default Example;
