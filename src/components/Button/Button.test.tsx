import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button", () => {
  describe("When rendered", () => {
    test("Then it should show a `ROLL` message", () => {
      const buttonText = "ROLL";

      render(<Button className={""} action={() => {}} message={"ROLL"} />);

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
