import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

test("renders greeting with name", () => {
  render(<Greeting name="Sathish" />);
  expect(screen.getByText("Hello, Sathish")).toBeInTheDocument();
});
