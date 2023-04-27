import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PostContext } from "../pages/Feed";
import PostForm from "./PostForm";
import { createUserPost } from "../api-service";
import axios from "axios";

jest.mock("../api-service");

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios;

describe.only("PostForm", () => {
  it("should render the form elements", () => {
    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("POST TYPE")).toBeInTheDocument();
    expect(screen.getByLabelText("SCENE")).toBeInTheDocument();
    expect(screen.getByLabelText("CONTENT")).toBeInTheDocument();
    expect(screen.getByText("CREATE")).toBeInTheDocument();
  });

  it("should submit the form when the create button is clicked", async () => {
    const setPostState = jest.fn();
    const navigate = jest.fn();

    mockedAxios.post.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "Joe Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
      ],
    });

    render(
      <BrowserRouter>
        <PostContext.Provider value={setPostState}>
          <PostForm />
        </PostContext.Provider>
      </BrowserRouter>
    );

    const contentInput = screen.getByLabelText("CONTENT");
    const createButton = screen.getByText("CREATE");

    fireEvent.change(contentInput, { target: { value: "Test content" } });
    fireEvent.click(createButton);

    await waitFor(() => expect(createUserPost).toHaveBeenCalledTimes(1));
    expect(createUserPost).toHaveBeenCalledWith({
      content: "Test content",
      event: false,
      comment: false,
      scene: "",
      postPhoto: "",
      userId: null,
    });
    expect(navigate).toHaveBeenCalledWith("/feed");
  });
});
