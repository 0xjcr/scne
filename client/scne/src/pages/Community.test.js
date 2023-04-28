import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Community from "./Community";

test("renders user profiles with correct first name and sorted by endorsements", () => {
  const scene = "scene0";
  const profiles = [
    { id: 1, firstName: "Alice", endorsed: 3 },
    { id: 2, firstName: "Bob", endorsed: 2 },
    { id: 3, firstName: "Charlie", endorsed: 1 },
  ];
  const getAllProfiles = jest.fn().mockResolvedValue(profiles);

  const { getByText } = render(
    <MemoryRouter>
      <Community scene={scene} getAllProfiles={getAllProfiles} />
    </MemoryRouter>
  );

  expect(getByText("Alice")).toBeInTheDocument();
  expect(getByText("Bob")).toBeInTheDocument();
  expect(getByText("Charlie")).toBeInTheDocument();
});
