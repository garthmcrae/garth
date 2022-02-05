import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Anchor,
  Box,
  Button,
  Container,
  Draw,
  Flex,
  Layout,
  Paragraph,
  Root,
  Title,
} from "./garth";
import Home from "./Home";
import Components from "./Components";
import Compositions from "./Compositions";
import getArrayRandomItem from "./getArrayRandomItem";
import "./themes.scss";
import navigationItems from "./navigationItems";

const themes = ["default", "gameboy", "new-wave", "vhs"];

const App = () => {
  const [theme, setTheme] = useState(themes[2]);
  const handleTheme = () => {
    setTheme(getArrayRandomItem(themes.filter((t) => t !== theme)));
  };
  return (
    <Router>
      <div className={theme}>
        <Root>
          <Layout>
            <header>
              <Flex>
                <Box>
                  <Title>
                    <Anchor element={Link} to="/">
                      Garth
                    </Anchor>
                  </Title>
                </Box>
                <Box fluid passive />
                <Box passive>
                  <Draw>
                    <nav aria-label="Garth" role="navigation">
                      <Flex element="ul" wrap>
                        {navigationItems.map(({ label, path }) => (
                          <Box adaptive element="li" key={label}>
                            <Button element={Link} to={path}>
                              {label}
                            </Button>
                          </Box>
                        ))}
                        <Box adaptive element="li">
                          <Button type="button" onClick={handleTheme}>
                            Theme
                          </Button>
                        </Box>
                      </Flex>
                    </nav>
                  </Draw>
                </Box>
              </Flex>
            </header>
            <main>
              <Container>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route
                    exact
                    path="/compositions"
                    element={<Compositions />}
                  />
                  <Route exact path="/components" element={<Components />} />
                </Routes>
              </Container>
            </main>
            <footer>
              <Flex>
                <Box fluid />
                <Box>
                  <Paragraph>&copy; Copyright.</Paragraph>
                </Box>
              </Flex>
            </footer>
          </Layout>
        </Root>
      </div>
    </Router>
  );
};

export default App;