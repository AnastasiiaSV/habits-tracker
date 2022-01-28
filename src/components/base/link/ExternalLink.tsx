import { FunctionComponent, PropsWithChildren, AnchorHTMLAttributes } from "react";

import { StyledExternalLink } from "./link.styled";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const ExternalLink: FunctionComponent<PropsWithChildren<ExternalLinkProps>> = ({ children = "Link", to, ...props }) => {
  return (
    <StyledExternalLink href={to} {...props}>
      {children}
    </StyledExternalLink>
  );
};

export { ExternalLink };

export default ExternalLink;
