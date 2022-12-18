import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
  AuthLinkTextGroup,
} from "../components/common/auth.styled";
import AuthInput from "../components/AccountForm/AuthInput";
import { ACLogoIcon } from "../assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <AuthContainer>
        <div>
          <ACLogoIcon />
        </div>
        <h2 style={{ margin: "20px 0 10px 0" }}>登入Alphitter</h2>
        <AuthInputContainer>
          <AuthInput
            label="帳號"
            placeholder="請輸入帳號"
            value={username}
            onChange={(nameInputValue) => setUsername(nameInputValue)}
          />
        </AuthInputContainer>
        <AuthInputContainer>
          <AuthInput
            type="password"
            label="密碼"
            placeholder="請輸入密碼"
            value={password}
            onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
        </AuthInputContainer>
        <AuthButton>登入</AuthButton>
        <AuthLinkTextGroup>
          <Link to="/signup">
            <AuthLinkText>註冊</AuthLinkText>
          </Link>
          <Link to="/admin_login">
            <AuthLinkText>後台登入</AuthLinkText>
          </Link>
        </AuthLinkTextGroup>
      </AuthContainer>
    </Container>
  );
};

export default LoginPage;
