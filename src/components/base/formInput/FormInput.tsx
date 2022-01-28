import { FunctionComponent, ChangeEvent } from "react";

import { StyledFormInput } from "./formInput.styled";

interface GeneralFormInputProps {
  width?: string;
  height?: string;
  hasError?: boolean;
  isDisabled?: boolean;
}

interface FormInputProps extends GeneralFormInputProps {
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: FunctionComponent<FormInputProps> = ({
  type = "text",
  isDisabled = false,
  ...props
}) => {
  return <StyledFormInput type={type} {...props} disabled={isDisabled} />;
};

export { FormInput };
export type { GeneralFormInputProps };

export default FormInput;
