import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("renders header with proper text", () => {
  render(<App />);
  const headerText = screen.getByText(/Todo App/i);
  expect(headerText).toBeInTheDocument();
});

// this is an example for tomorrows code
it("testing something", async () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "click" });
  fireEvent.click(button);
  const foundText = await screen.findByText(/some text/i);
  expect(foundText).toBeInTheDocument();
});
