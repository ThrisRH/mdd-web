import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MainButton from "../src/component/button/main-button";

describe("MainButton component", () => {
  it("renders children and has role button", () => {
    render(
      <MainButton variant="secondary" onClick={() => {}}>
        Click Me
      </MainButton>,
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handle = jest.fn();
    render(
      <MainButton variant="primary" onClick={handle}>
        Press
      </MainButton>,
    );

    const btn = screen.getByText("Press");
    fireEvent.click(btn);
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it("respects disabled prop", () => {
    const handle = jest.fn();
    render(
      <MainButton variant="secondary" onClick={handle} isDisable={true}>
        Disabled
      </MainButton>,
    );

    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    fireEvent.click(btn);
    expect(handle).not.toHaveBeenCalled();
  });
});
