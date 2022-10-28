import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterList from "./FilterList";

describe("Filter-List Component", () => {
  test("renders the left arrow", () => {
    render(<FilterList />);

    const rightArrowElement = screen.getByTestId("right-arr");
    userEvent.click(rightArrowElement);

    const displayedEl = screen.getByTestId("left-arr");
    expect(displayedEl).toBeInTheDocument();
  });
});
