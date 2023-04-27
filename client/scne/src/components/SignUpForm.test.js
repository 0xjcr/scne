import React from "react";
import SignUpForm from "./SignUpForm";
import { render } from "@testing-library/react";
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
});
