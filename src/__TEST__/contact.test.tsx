import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Contact from "../Pages/Contact";
import * as ReactRedux from 'react-router'

const queryClient = new QueryClient();

// jest.mock('react-router', () => ({
//     useNavigate: () => <div></div>
// }));

const mockUseNavigate = jest.spyOn(ReactRedux, 'useNavigate');

test("Testing on Contact Us Page", () => {
    mockUseNavigate.mockReturnValue(() => <div></div>);
    const mockMutate=jest.fn();
  render(
    <QueryClientProvider client={queryClient}>
      <Contact/>
    </QueryClientProvider>
  );
  const contactHeading = screen.getByText("Our Contact Details");
  expect(contactHeading).toBeInTheDocument();

  const submitBtn = screen.getByRole("button", { name: "Submit" });
  expect(submitBtn).toBeInTheDocument();

  // const errorMessage=screen.getByText("Error Message",{exact:false});
  // expect(errorMessage).toBeInTheDocument();

  expect(mockMutate).toHaveBeenCalled();
});
