import { render } from "@testing-library/react";
import Post from "./Post";
import { MemoryRouter, Router } from "react-router-dom";

describe("Post", () => {
  const post = {
    id: 1,
    content: "This is a post",
    event: false,
    comment: "This is a comment",
    scene: "This is a scene",
    postPhoto: "https://via.placeholder.com/150",
    user: {
      id: 1,
      firstName: "John",
      member: true,
      photo: "https://via.placeholder.com/150",
    },
  };

  test("renders post content", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Post {...post} />
      </MemoryRouter>
    );
    expect(getByText("This is a post")).toBeInTheDocument();
  });

  test("renders post photo", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Post {...post} />
      </MemoryRouter>
    );
    expect(getByAltText("")).toBeInTheDocument();
  });

  test("renders event label when event is true", () => {
    const postWithEvent = { ...post, event: true };
    const { getByText } = render(
      <MemoryRouter>
        <Post {...postWithEvent} />
      </MemoryRouter>
    );
    expect(getByText("EVENT")).toBeInTheDocument();
  });
});
