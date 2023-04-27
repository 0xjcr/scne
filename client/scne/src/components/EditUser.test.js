import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EditUser from "./EditUser";
import { updateProfile } from "../api-service";

jest.mock("../api-service", () => ({
  updateProfile: jest.fn(() => Promise.resolve({})),
}));

describe("EditUser", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <EditUser />
      </MemoryRouter>
    );
  });

  it("should render the edit profile form", () => {
    expect(screen.getByText(/edit profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/edit bio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/join your team/i)).toBeInTheDocument();
    expect(screen.getByText(/join scenes near you/i)).toBeInTheDocument();
    expect(screen.getByText(/coffee/i)).toBeInTheDocument();
    expect(screen.getByText(/wellness/i)).toBeInTheDocument();
    expect(screen.getByText(/mixology/i)).toBeInTheDocument();
    expect(screen.getByText(/done/i)).toBeInTheDocument();
  });
});
