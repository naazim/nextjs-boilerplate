/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});
