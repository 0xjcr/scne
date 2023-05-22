import { render, screen } from "@testing-library/react";
import ProfileUser from "../components/ProfileUser";
import { MemoryRouter, Router } from "react-router-dom";

describe("ProfileUser", () => {
  it("renders the user profile when the user is logged in", async () => {
    localStorage.setItem("userId", "1");
    const mockProfile = {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      ig: "johndoe",
      photo: "https://example.com/profile.jpg",
      bio: "Lorem ipsum dolor sit amet",
      member: false,
      email: "john.doe@example.com",
      reviewCount: 10,
      endorsed: 5,
    };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => mockProfile,
    });

    render(
      <MemoryRouter>
        <ProfileUser id="1" />
      </MemoryRouter>
    );

    expect(await screen.findByText("John")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByLabelText("review")).toBeInTheDocument();

    global.fetch.mockRestore();
    localStorage.removeItem("userId");
  });
});
