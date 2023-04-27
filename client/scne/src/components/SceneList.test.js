import React from "react";
import { render } from "@testing-library/react";
import SceneList from "./SceneList";

describe("SceneList component", () => {
  it("should render without errors", () => {
    const { getByText } = render(<SceneList />);
    expect(getByText("SceneList")).toBeInTheDocument();
  });
});
