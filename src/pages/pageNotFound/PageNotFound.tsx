import { FunctionComponent } from "react";

import {
  StyledPageNotFound,
  StyledPageNotFoundContainer,
} from "./pageNotFound.styled";

/* eslint-disable-next-line */
interface PageNotFoundProps {}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
  return (
    <StyledPageNotFound>
      <StyledPageNotFoundContainer> not found </StyledPageNotFoundContainer>
    </StyledPageNotFound>
  );
};

export { PageNotFound };

export default PageNotFound;
