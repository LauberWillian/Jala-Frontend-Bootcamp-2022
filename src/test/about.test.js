import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../pages/about";

test("renders a message", () => {
  const { container, getByText } = render(<About />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText("About")).toBeInTheDocument();
  expect(container).toMatchInlineSnapshot(`
     <div>
       <div>
         <h1>
           About
         </h1>
       </div>
     </div>
      `);
  console.log(container.innerHTML);
});
