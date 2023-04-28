// import { fireEvent, render, screen } from "@testing-library/react";
// import { PostContext } from "../pages/Feed";
// import PostForm from "./PostForm";
// import React from "react";

// const mockNavigate = jest.fn();

// jest.mock("../api-service", () => ({
//   createUserPost: jest.fn(() => Promise.resolve({})),
// }));
// jest.mock("react-router-dom", () => ({
//   useNavigate: () => mockNavigate,
// }));

// describe("PostForm", () => {
//   it("should handle form submission correctly", async () => {
//     render(
//       <PostContext.Provider value={{}}>
//         <PostForm />
//       </PostContext.Provider>
//     );

//     fireEvent.change(screen.getByLabelText("POST TYPE"), {
//       target: { name: "event", value: "event" },
//     });

//     fireEvent.change(screen.getByLabelText("SCENE"), {
//       target: { name: "scene", value: "coffee" },
//     });

//     fireEvent.change(screen.getByLabelText("CONTENT"), {
//       target: { name: "content", value: "Test post content" },
//     });

//     fireEvent.click(screen.getByRole("button", { name: "CREATE" }));

//     expect(createUserPost).toHaveBeenCalledWith({
//       content: "Test post content",
//       event: true,
//       comment: false,
//       scene: "coffee",
//       postPhoto: "",
//       userId: localStorage.getItem("userId"),
//     });

//     await Promise.resolve();

//     expect(mockNavigate).toHaveBeenCalledWith("/feed");
//   });
// });
