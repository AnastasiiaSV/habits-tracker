import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import { Button } from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });
});
