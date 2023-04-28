import { render, screen, fireEvent, act } from "@testing-library/react";
import AltTile from "../components/AltTile";
import { getAllProfiles, updateUpvote } from "../api-service";
import { MemoryRouter } from "react-router-dom";

jest.mock("../api-service");

describe("AltTile component", () => {
  const mockTile = {
    id: 1,
    name: "Mock Business",
    upvotes: 5,
    ranking: 1,
    photo: "https://example.com/photo.jpg",
  };

  const mockUsers = [
    {
      id: 1,
      firstName: "John",
      reviewCount: 10,
      photo: "https://example.com/john.jpg",
      member: "Mock Business",
    },
    {
      id: 2,
      firstName: "Jane",
      reviewCount: 5,
      photo: "https://example.com/jane.jpg",
      member: "Mock Business",
    },
  ];

  beforeEach(() => {
    getAllProfiles.mockResolvedValue(mockUsers);
    updateUpvote.mockResolvedValue({ upvotes: mockTile.upvotes + 1 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders business name", async () => {
    render(
      <MemoryRouter>
        <AltTile {...mockTile} />
      </MemoryRouter>
    );
    const name = await screen.findByText(mockTile.name);
    expect(name).toBeInTheDocument();
  });

  test("renders user circles", async () => {
    render(
      <MemoryRouter>
        <AltTile {...mockTile} />
      </MemoryRouter>
    );
    const user1 = await screen.findByAltText(mockUsers[0].firstName);
    expect(user1).toBeInTheDocument();
    const user2 = await screen.findByAltText(mockUsers[1].firstName);
    expect(user2).toBeInTheDocument();
  });

  test("fetches users matching business name", async () => {
    render(
      <MemoryRouter>
        <AltTile {...mockTile} />
      </MemoryRouter>
    );
    await screen.findByAltText(mockUsers[0].firstName);
    expect(getAllProfiles).toHaveBeenCalledWith();
  });
});
