import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders version", () => {
  render(<App />);
  const element = screen.getByText(/Garth version/i);
  expect(element).toBeInTheDocument();
});
