import React from "react";
import { render, screen } from "@testing-library/react";
import CloudinaryImageUpload from "../components/CloudinaryImageUpload";

describe("CloudinaryImageUpload", () => {
  test("should render component with file input and upload button", () => {
    render(<CloudinaryImageUpload />);
    const fileInput = screen.getByPlaceholderText(/upload an image/i);
    expect(fileInput).toBeInTheDocument();
  });
});
