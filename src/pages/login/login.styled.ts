import styled from "styled-components";
import { black5 } from "../../assets/theme";

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${black5};
`;

const StyledLoginContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const StyledLoginForm = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLoginButtonWrapper = styled.div`
  margin: 10px 0 0 0;
`;

export {
  StyledLogin,
  StyledLoginContent,
  StyledLoginForm,
  StyledLoginButtonWrapper,
};
