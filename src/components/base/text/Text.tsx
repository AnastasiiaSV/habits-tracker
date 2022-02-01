import { FunctionComponent, PropsWithChildren } from "react";

import { StyledText } from "./text.styled";

type TextSizeType = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

interface TextProps {
  size?: TextSizeType;
}

const Text: FunctionComponent<PropsWithChildren<TextProps>> = ({
  children,
  size = "md",
}) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export { Text };
export type { TextProps, TextSizeType };

export default Text;
