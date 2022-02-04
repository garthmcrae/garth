import {} from "../garth";

const code = `
<Box passive>
  <Draw>
    <nav aria-label="Garth" role="navigation">
      <Flex element="ul" wrap>
        <Box adaptive element="li">
          <Button element={Link} to="/">
            Home
          </Button>
        </Box>
      </Flex>
    </nav>
  </Draw>
</Box>
`;

const object = {
  code,
  description:
    "Hides content to the side at smaller view size, main navigation is an example of this in use.",
  name: "Draw",
};

export default object;
