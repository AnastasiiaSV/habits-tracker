import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { green, darkGreen, darkerGreen } from "../../../assets/theme";

const generalStyles = css`
  color: ${darkGreen};
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;

  &:active,
  &:visited {
    color: ${green};
  }
  &:hover {
    color: ${darkerGreen};
  }
`;

const StyledLink = styled(Link)`
  ${generalStyles};
`;

const StyledExternalLink = styled.a`
  ${generalStyles};
`;

export { StyledLink, StyledExternalLink };
