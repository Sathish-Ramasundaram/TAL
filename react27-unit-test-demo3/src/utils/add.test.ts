import { add } from "./add";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("adds negative numbers correctly", () => {
  expect(add(-2, -3)).toBe(-5);
});
