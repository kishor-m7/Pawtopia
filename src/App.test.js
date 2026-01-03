import React from "react";
import { render, screen } from "@testing-library/react";

// Mock react-router-dom before importing App to avoid importing an ESM-only
// router package during Jest's module resolution phase.
jest.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <>{children}</>,
  Route: ({ element }) => element,
  Link: ({ children }) => <a>{children}</a>,
  useLocation: () => ({ pathname: "/" }),
  useParams: () => ({}),
  useNavigate: () => jest.fn(),
}));

const App = require("./App").default;

test("renders app title", () => {
  // Prevent jsdom "Not implemented: window.alert" from breaking tests
  window.alert = jest.fn();

  render(<App />);
  // Use the logo image alt text which is unique in the Navbar
  const logos = screen.getAllByAltText(/pawtopia logo/i);
  expect(logos.length).toBeGreaterThan(0);
});
