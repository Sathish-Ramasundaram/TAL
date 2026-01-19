import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter when button is clicked", () => {
  render(<Counter />);

  // Check initial state
  expect(screen.getByText("Count: 0")).toBeInTheDocument();

  // Click button
  fireEvent.click(screen.getByText("Increment"));

  // Check updated state
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});