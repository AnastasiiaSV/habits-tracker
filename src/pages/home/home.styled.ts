import styled from "styled-components";
import { lightGreen85 } from "../../assets/theme";

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: ${lightGreen85}; ;
`;

const StyledHomeTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledHomeContent = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const StyledHabbitBlock = styled.div`
  width: 100%;
  // height: 90%;
  display: flex;
  flex-direction: column;
`;

const StyledHabbitTitle = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

const StyledHabbitTracker = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export {
  StyledHome,
  StyledHomeTitle,
  StyledHomeContent,
  StyledHabbitBlock,
  StyledHabbitTitle,
  StyledHabbitTracker,
};
