import React, { FunctionComponent } from "react";

import { StyledButton } from "./button.styled";

interface ButtonProps {
  width?: string;
  height?: string;
  isDisabled?: boolean;
  children?: string | React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  children = "Click here",
  isDisabled = false,
  ...props
}) => (
  <StyledButton disabled={isDisabled} {...props}>
    <span>{children}</span>
  </StyledButton>
);

export { Button };
export type { ButtonProps };

export default Button;
