import React from "react";
import SignUpBiz from "../components/SignUpBiz";
import { render } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";

describe("Sign up biz component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <SignUpBiz />
      </MemoryRouter>
    );
    expect(getByTestId("sign-up biz")).toBeInTheDocument();
  });
});
