import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CloudinaryImageUpload from "./CloudinaryImageUpload";

jest.mock("../api-service");

describe("CloudinaryImageUpload", () => {
  it("should render the component correctly", () => {
    const { getByLabelText } = render(
      <CloudinaryImageUpload userId="test_user_id" onUpload={() => {}} />
    );

    expect(getByLabelText("Upload photo")).toBeInTheDocument();
  });
});
