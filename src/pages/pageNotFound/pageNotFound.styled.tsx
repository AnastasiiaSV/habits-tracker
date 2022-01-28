import styled from "styled-components";
import { black30 } from "../../assets/theme";

const StyledPageNotFound = styled.div`
  height: 100%;
  width: 100%;
  background: ${black30};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPageNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 15px;
  }
`;

export { StyledPageNotFound, StyledPageNotFoundContainer };
