import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CloudinaryImageUpload from "./CloudinaryImageUpload";

describe("CloudinaryImageUpload", () => {
  test("should render component with file input and upload button", () => {
    render(<CloudinaryImageUpload />);
    const fileInput = screen.getByRole("button", { name: /upload an image/ });
    expect(fileInput).toBeInTheDocument();
  });
});
