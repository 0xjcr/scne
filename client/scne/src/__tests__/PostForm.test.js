import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { PostContext } from "../pages/Feed";
import PostForm from "../pages/PostForm";
import { createUserPost } from "../api-service";
import axios from "axios";

jest.mock("../api-service");

// Mock jest and set the type
jest.mock("axios");
const mockedAxios = axios;

describe("PostForm", () => {
  it("should render the form elements", () => {
    render(
      <BrowserRouter>
        <PostForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("POST TYPE")).toBeInTheDocument();
    expect(screen.getByText(/event/i)).toBeInTheDocument();
  });
});
