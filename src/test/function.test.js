import { DoSomething } from "../utils/function";

test("Multiply by two", () => {
  expect(DoSomething(2, 2)).toBe(4);
});
