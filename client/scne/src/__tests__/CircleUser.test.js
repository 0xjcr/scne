import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import CircleUser from "../components/CircleUser";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("CircleUser", () => {
  const mockNavigate = jest.fn();
  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
  });

  const defaultProps = {
    id: 1,
    firstName: "John",
    member: true,
    photo: "https://via.placeholder.com/150",
    clickable: true,
    scale: 1,
  };

  it("renders the component", () => {
    render(<CircleUser {...defaultProps} />);
    expect(screen.getByAltText(defaultProps.firstName)).toBeInTheDocument();
  });
});
