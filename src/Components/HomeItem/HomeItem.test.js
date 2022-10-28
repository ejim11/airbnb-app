import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomeItem from "./HomeItem";

describe("HomeItem Component", () => {
  test("renders colored heart", () => {
    render(<HomeItem />);

    const heartEl = screen.getByTestId("heart");
    userEvent.click(heartEl);

    const coloredHeartEl = screen.getByTestId("heart");
    expect(coloredHeartEl).toHaveClass("active");
  });
});
