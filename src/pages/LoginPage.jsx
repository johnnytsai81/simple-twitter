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
import { login } from "../API/auth";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const { sucess, token } = await login({
      account,
      password,
    });

    if (sucess) {
      localStorage.setItem("authToken", token);

      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "登入成功",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      return;
    }
    
    // 登入失敗訊息
    Swal.fire({
      position: "top",
      title: "登入失敗",
      timer: 1000,
      icon: "error",
      showConfirmButton: false,
    });
  };

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
            value={account}
            onChange={(accountInputValue) => setAccount(accountInputValue)}
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
        <AuthButton onClick={handleClick}>登入</AuthButton>
        <AuthLinkTextGroup>
          <Link to="/signup">
            <AuthLinkText>註冊</AuthLinkText>
          </Link>
          ．
          <Link to="/admin_login">
            <AuthLinkText>後台登入</AuthLinkText>
          </Link>
        </AuthLinkTextGroup>
      </AuthContainer>
    </Container>
  );
};

export default LoginPage;
