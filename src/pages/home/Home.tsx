import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect, useRef } from "react";

import {
  StyledHabbitBlock,
  StyledHome,
  StyledHomeContent,
  StyledHomeTitle,
} from "./home.styled";
import { useBreakpoint } from "../../hooks";
import { Text, TextSizeType } from "../../components/base/text";
import {
  mockedUser,
  mockedHabits,
  MockedHabitsType,
  MockedUserDataType,
} from "../../helpers/moked";
import { ScreenSize } from "../../constants";
/// import { Checkbox } from "../../components/base/checkbox";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const breakpoint = useBreakpoint();
  const ref = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(mockedUser));
    localStorage.setItem("userHabits", JSON.stringify(mockedHabits));
  }, []);

  const userData = JSON.parse(
    localStorage.getItem("userData") as string
  ) as MockedUserDataType;
  const userHabits = JSON.parse(
    localStorage.getItem("userHabits") as string
  ) as MockedHabitsType;

  const getHeaderSize = () => {
    let size: TextSizeType;
    if (breakpoint === ScreenSize.XXS) {
      size = "lg";
    } else if (breakpoint === ScreenSize.SM || breakpoint === ScreenSize.XS) {
      size = "xl";
    } else {
      size = "2xl";
    }
    return size;
  };

  return (
    <StyledHome>
      <StyledHomeTitle>
        <Text size={getHeaderSize()}>
          Hello, {userData.name}, here is your habbits:
        </Text>
      </StyledHomeTitle>
      <StyledHomeContent>
        <StyledHabbitBlock>
          {userHabits.map(({ name }) => (
            <Text>{name}</Text>
          ))}
        </StyledHabbitBlock>

        {/* <Text size="normal"> normal text </Text>
        <Text size="small"> {format(new Date(), "p")} </Text>
        <Text size="xsmall"> xsmallxsmall text </Text>

        <Button>button</Button>
        <Button isDisabled={true}>button</Button>

        <Link to="/login">login inner link</Link>
        <ExternalLink to="https://www.google.com.ua/">
          Google external link
        </ExternalLink> */}
      </StyledHomeContent>
    </StyledHome>
  );
};

export default Home;

export { Home };
