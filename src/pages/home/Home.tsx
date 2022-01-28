import { FunctionComponent } from "react";
// import { useBreakpoint } from "../../hooks";

import { StyledHome } from "./home.styled";
import { Text } from "../../components/base/text";
import { Button } from "../../components/base/button";
import { ExternalLink, Link } from "../../components/base/link";
import { Checkbox } from "../../components/base/checkbox";

const Home: FunctionComponent = () => {
  // const breakpoint = useBreakpoint();

  return (
    <StyledHome>
      <Text size="normal"> normal text </Text>
      <Text size="small"> small text </Text>
      <Text size="xsmall"> xsmallxsmall text </Text>

      <Button>button</Button>
      <Button isDisabled={true}>button</Button>

      <Link to="/login">login inner link</Link>
      <ExternalLink to="https://www.google.com.ua/">
        Google external link
      </ExternalLink>

      <Checkbox>11</Checkbox>
    </StyledHome>
  );
};

export default Home;

export { Home };
