import styled from "styled-components";
import {
  black10,
  black20,
  black30,
  lightGreen,
  green,
  white,
} from "../../../assets/theme";

import { GeneralFormInputProps } from "./FormInput";

const StyledFormInput = styled.input<GeneralFormInputProps>`
  box-sizing: border-box;
  width: ${({ width }) => width || "300px"};
  height: ${({ height }) => height || "50px"};
  min-height: 30px;
  min-width: 70px;
  padding: 15px 35px 15px 15px;

  font-size: 16px;
  caret-color: ${green};
  background-color: ${lightGreen};

  border: ${({ hasError }) => (hasError ? "solid 1px orange" : "0px")};
  border-radius: 5px;
  box-shadow: 0 0 2px 0 ${black30};

  &:hover,
  &:focus {
    border: ${({ hasError }) => (hasError ? "solid 1px orange" : "0px")};
    box-shadow: 0 1px 6px 0 ${black10};
    outline: 0;
  }
  &:focus {
    background-color: ${white};
  }

  &:disabled,
  ::placeholder {
    font-size: 18px;
    color: ${black20};
  }
`;

export { StyledFormInput };
