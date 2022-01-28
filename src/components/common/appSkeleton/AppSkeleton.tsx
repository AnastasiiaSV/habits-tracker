import { FunctionComponent } from "react";
import { Container, Header, Content } from "./appSkeleton.styled";

/* eslint-disable-next-line */
interface AppSkeletonProps {}

const AppSkeleton: FunctionComponent<AppSkeletonProps> = (props) => {
  return (
    <Container>
      <Header></Header>
      <Content>{props.children}</Content>
    </Container>
  );
};

export default AppSkeleton;
