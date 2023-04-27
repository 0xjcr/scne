import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UploadWidget from "./UploadWidget";

it("should call open method on click", () => {
  const createUploadWidget = jest.fn();
  // const cloudinaryRef = { current: { createUploadWidget } };
  window.cloudinary = { createUploadWidget };

  const { getByTestId } = render(<UploadWidget />);
  const uploadButton = getByTestId("upload-button");

  fireEvent.click(uploadButton);

  expect(createUploadWidget).toHaveBeenCalled();
});

describe("Upload widget component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<UploadWidget />);
    expect(getByTestId("upload-button")).toBeInTheDocument();
  });
});
