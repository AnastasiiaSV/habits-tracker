import styled from "styled-components";

import { TextProps } from "./Text";
import { black } from "../../../assets/theme";

const sizes = {
  small: { fontSize: "14px", lineHeight: "20px" },
  xsmall: { fontSize: "12px", lineHeight: "16px" },
  normal: { fontSize: "16px", lineHeight: "24px" },
};

const StyledText = styled.p<Required<TextProps>>`
  color: ${black};
  font-size: ${({ size }) => sizes[size].fontSize};
  line-height: ${({ size }) => sizes[size].lineHeight};
`;

export { StyledText };
