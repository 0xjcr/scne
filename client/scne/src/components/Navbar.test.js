import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders without errors", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const navbarContainer = screen.getByTestId("navbarContainer");
    expect(navbarContainer).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/list"]}>
        <Navbar />
      </MemoryRouter>
    );

    const listLink = screen.getByRole("link", { name: "list" });
    const communityLink = screen.getByRole("link", { name: "community" });
    const feedLink = screen.getByRole("link", { name: "feed" });
    const businessLink = screen.queryByRole("link", { name: "business" });
    const profileLink = screen.queryByRole("link", { name: "account circle" });

    expect(listLink).toBeInTheDocument();
    expect(communityLink).toBeInTheDocument();
    expect(feedLink).toBeInTheDocument();
    expect(businessLink).not.toBeInTheDocument();
    expect(profileLink).not.toBeInTheDocument();
  });
});
