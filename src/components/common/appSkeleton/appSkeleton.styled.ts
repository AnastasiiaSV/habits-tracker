import styled from "styled-components";
import { black5, black10, black30 } from "../../../assets/theme";
const HEADER_HEIGHT = "60px";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Header = styled.div`
  height: ${HEADER_HEIGHT};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
  background: ${black5};
  color: ${black30};
`;

const Content = styled.div`
  background: ${black10};
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  overflow: auto;
`;

export { Container, Header, Content };
