import { Box, Button, Flex, Paragraph, Rule, Title, Typography } from "./garth";
import { Link } from "react-router-dom";
import Example from "./Example";
import anchor from "./components/anchor";
import anchorButton from "./components/anchorButton";
import anchorLink from "./components/anchorLink";
import border from "./components/border";
import box from "./components/box";
import button from "./components/button";
import buttonAnchor from "./components/buttonAnchor";
import buttonLink from "./components/buttonLink";
import checkableCheckbox from "./components/checkableCheckbox";
import checkableRadiobutton from "./components/checkableRadiobutton";
import container from "./components/container";
import draw from "./components/draw";
import expand from "./components/expand";
import flex from "./components/flex";
import input from "./components/input";
import label from "./components/label";
import paragraph from "./components/paragraph";
import root from "./components/root";
import rule from "./components/rule";
import select from "./components/select";
import table from "./components/table";
import title from "./components/title";

const Page = () => {
  return (
    <>
      <Box>
        <Paragraph element="h1">1. Components</Paragraph>
        <Typography size={[3, 4]}>
          Available components and basic usage.
        </Typography>
      </Box>
      <Box>
        <Rule />
      </Box>
      <Example {...anchor} />
      <Example {...anchorButton} />
      <Example {...anchorLink} />
      <Example {...border} />
      <Example {...box} />
      <Example {...button} />
      <Example {...buttonAnchor} />
      <Example {...buttonLink} />
      <Example {...checkableCheckbox} />
      <Example {...checkableRadiobutton} />
      <Example {...container} />
      <Example {...draw} />
      <Example {...expand} />
      <Example {...flex} />
      <Example {...input} />
      <Example {...label} />
      <Example {...paragraph} />
      <Example {...root} />
      <Example {...rule} />
      <Example {...select} />
      <Example {...table} />
      <Example {...title} />
      <Box>
        <Title>Compositions</Title>
        <Paragraph>
          See compositions for referances and commonly used combinations of
          components and layouts.
        </Paragraph>
      </Box>
      <Flex>
        <Box adaptive>
          <Button element={Link} to="/compositions">
            View compositions
          </Button>
        </Box>
        <Box adaptive>
          <Button onClick={() => window.scrollTo(0, 0)}>Back to top</Button>
        </Box>
      </Flex>
    </>
  );
};

export default Page;
