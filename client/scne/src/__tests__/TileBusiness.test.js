import React from "react";
import { render, screen } from "@testing-library/react";
import TileBusiness from "../components/TileBusiness";

describe("TileBusiness component", () => {
  const fakeBusiness = {
    id: 1,
    name: "Fake Business",
    upvotes: 10,
    ranking: 2,
    photo: "fakephoto.jpg",
  };

  describe("Tile Business component", () => {
    it("should render without errors", () => {
      const { getByTestId } = render(<TileBusiness />);
      expect(getByTestId("tile business")).toBeInTheDocument();
    });
  });

  it("should render the business name and photo", () => {
    render(<TileBusiness {...fakeBusiness} />);
    expect(screen.getByText(fakeBusiness.name)).toBeInTheDocument();
    expect(screen.getByAltText("hello")).toHaveAttribute(
      "src",
      fakeBusiness.photo
    );
  });
});
