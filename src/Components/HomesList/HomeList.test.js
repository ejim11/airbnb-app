import { render, screen } from "@testing-library/react";
import HomeList from "./HomeList";

describe("HomeList Component", () => {
  test("renders list of homes", () => {
    render(<HomeList />);

    const homesListEL = screen.getAllByTestId("homes-item");
    expect(homesListEL).toBeDefined();
  });
});
