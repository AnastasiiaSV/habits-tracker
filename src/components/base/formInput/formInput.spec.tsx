import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

import { FormInput } from "./FormInput";

afterEach(() => {
  cleanup();
});

describe("FormInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FormInput />);

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully with attributes", () => {
    const { getByPlaceholderText } = render(
      <FormInput
        placeholder={"placeholder"}
        width="150px"
        height="30px"
        hasError
        isDisabled
      />
    );

    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  });

  it("should render successfully with value", () => {
    const { getByDisplayValue } = render(<FormInput value={"input value"} />);

    expect(getByDisplayValue("input value")).toBeInTheDocument();
  });
});
