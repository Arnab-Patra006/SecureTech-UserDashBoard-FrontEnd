import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "../Pages/About";

test("about us page", () => {
  render(
    <MemoryRouter>
      <About />;
    </MemoryRouter>
  );
  const testElement = screen.getByText(`About Us`);
  expect(testElement).toBeInTheDocument();
});
