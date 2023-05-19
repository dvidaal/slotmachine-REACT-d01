import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout", () => {
  describe("When rendered", () => {
    test("Then it should show an h1 with the text `SLOT MACHINE`", () => {
      const expectedText = "SLOT MACHINE";

      render(<Layout />);

      const expectedResult = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
