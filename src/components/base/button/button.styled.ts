import styled from "styled-components";
import { ButtonProps } from "./Button";
import { green, black10, black30, white } from "../../../assets/theme";

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width || "160px"};
  height: ${({ height }) => height || "45px"};
  border: ${"1px solid" + green};
  border-radius: 30px;
  background: ${white};
  cursor: pointer;
  font-size: 18px;
  color: ${green};
  margin: 5px;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active:not([disabled]) {
    box-shadow: 0 1px 5px 0 ${black30};
    span {
      opacity: 0.5;
    }
  }

  &:disabled {
    opacity: 0.5;
    background: ${black10};
    color: ${green};
    cursor: not-allowed;
  }
`;

export { StyledButton };
