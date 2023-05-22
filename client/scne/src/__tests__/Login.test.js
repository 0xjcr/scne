import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/Login";
import { validateEmail } from "../components/SignUpBiz";

describe("Test the Log In page", () => {
  beforeAll(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("should render without errors", async () => {
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });
  it("should not allow non-valid email", () => {
    const testEmail = "false.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });
});
