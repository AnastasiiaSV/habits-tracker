import { FunctionComponent, useState } from "react";
import { Button } from "../../components/base/button";
import { FormInput } from "../../components/base/formInput";

import {
  StyledLogin,
  StyledLoginContent,
  StyledLoginButtonWrapper,
  StyledLoginForm,
} from "./login.styled";

/* eslint-disable-next-line */
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>();

  const handleButtonClick = () => {
    console.log({ email });
  };

  return (
    <StyledLogin>
      <StyledLoginContent>
        <StyledLoginForm>
          <FormInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={true}
            type="email"
          />
          <FormInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <StyledLoginButtonWrapper>
            <Button onClick={handleButtonClick}>Login</Button>
          </StyledLoginButtonWrapper>
        </StyledLoginForm>
      </StyledLoginContent>
    </StyledLogin>
  );
};

export default Login;

export { Login };
export type { LoginProps };
