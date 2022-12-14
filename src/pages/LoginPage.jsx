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
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { userLogin } from "../API/auth";
import { Toast } from "../utilities/sweetalert";

const LoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.trim().length === 0) {
      Toast.fire({
        title: "請輸入帳號!",
        icon: "error",
      });
      return;
    }
    if (password.trim().length === 0) {
      Toast.fire({
        title: "請輸入密碼!",
        icon: "error",
      });
      return;
    }

    const data = await userLogin({
      account,
      password,
    });
    const token = data.data.token;

    if (data.success) {
      // 登入成功訊息
      localStorage.setItem("authToken", token);
      Toast.fire({
        title: "登入成功",
        icon: "success",
      });
      navigate("/main");
      return;
    } else if (data.data.user.role === "admin") {
      Toast.fire({
        title: "帳號不存在!",
        icon: "error",
      });
      // 登入失敗後欄位清空
      setAccount("");
      setPassword("");
    } else {
      Toast.fire({
        title: "登入失敗",
        icon: "error",
      });
      // 登入失敗後欄位清空
      setAccount("");
      setPassword("");
    }
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
          </Link>{'．'}
          <Link to="/admin_login">
            <AuthLinkText>後台登入</AuthLinkText>
          </Link>
        </AuthLinkTextGroup>
      </AuthContainer>
    </Container>
  );
};

export default LoginPage;
