import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Topbar from "../components/Topbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";

describe("Topbar component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Topbar />
      </Provider>
    );
    expect(getByTestId("topbar")).toBeInTheDocument();
  });
});
