import React from "react";
import SignUpForm from "./SignUpForm";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";

describe("Sign up bar component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    expect(getByTestId("sign-up")).toBeInTheDocument();
  });

  it("updates input values when typed in", () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const firstNameInput = screen.getByLabelText("FIRST NAME");
    const lastNameInput = screen.getByLabelText("LAST NAME");
    const emailInput = screen.getByLabelText("EMAIL");
    const passwordInput = screen.getByLabelText("PASSWORD");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
    expect(emailInput.value).toBe("johndoe@example.com");
    expect(passwordInput.value).toBe("password123");
  });
});
