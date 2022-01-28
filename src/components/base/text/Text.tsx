import { FunctionComponent, PropsWithChildren } from "react";

import { StyledText } from "./text.styled";

type TextSizeType = "normal" | "small" | "xsmall";

interface TextProps {
  size?: TextSizeType;
}

const Text: FunctionComponent<PropsWithChildren<TextProps>> = ({
  children,
  size = "normal",
}) => {
  return <StyledText size={size}>{children}</StyledText>;
};

export { Text };
export type { TextProps, TextSizeType };

export default Text;
