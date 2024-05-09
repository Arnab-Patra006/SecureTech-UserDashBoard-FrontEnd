import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";

test("about navbar page", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("About")).toBeInTheDocument();
  expect(getByText("Contact Us")).toBeInTheDocument();
  expect(getByText("Logout")).toBeInTheDocument();
});
