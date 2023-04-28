import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, Router } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Login, { validateEmail } from "./Login";
import Profile from "./Profile";

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
  describe("pressing LOGIN should re-drect you to your profile page", () => {
    it("", () => {
      const loggedInUserId = "1";
      const handleLogin = jest.fn();

      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );

      const alertMock = jest.spyOn(window, "alert").mockImplementation();

      const button = screen.getByRole("button", { name: /log in/i });
      fireEvent.click(button);

      expect(alertMock).toHaveBeenCalledTimes(1);
    });
  });
});
