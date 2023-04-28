import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Topbar from "./Topbar";

describe("Topbar component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<Topbar />);
    expect(getByTestId("topbar")).toBeInTheDocument();
  });

  it("should update scene state when a SpeedDialAction is clicked", () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <Topbar scene="mixology" onSceneChange={mockOnChange} />
    );
    fireEvent.click(getByLabelText("wellness"));
    expect(mockOnChange).toHaveBeenCalledWith("wellness");
  });
});
