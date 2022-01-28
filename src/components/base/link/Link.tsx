import { FunctionComponent, PropsWithChildren } from "react";
import { LinkProps as ReactRouterLinkProps } from "react-router-dom";

import { StyledLink } from "./link.styled";

const Link: FunctionComponent<PropsWithChildren<ReactRouterLinkProps>> = ({ children = "Link", ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export { Link };

export default Link;
