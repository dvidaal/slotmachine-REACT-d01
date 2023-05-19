import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header", () => {
  describe("When rendered", () => {
    test("Then it should show an h1 with the text `SLOT MACHINE`", () => {
      const expectedText = "SLOT MACHINE";

      render(<Header />);

      const expectedResult = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
