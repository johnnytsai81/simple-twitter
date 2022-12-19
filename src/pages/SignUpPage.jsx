import { AuthContainer ,
  AuthInputContainer ,AuthButton ,AuthLinkText } from "../components/common/auth.styled";
import AuthInput from "../components/AccountForm/AuthInput";
import { ACLogoIcon } from "../assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')


  return (
    <Container>
      <AuthContainer>
        <div>
          <ACLogoIcon />
        </div>
        <h2 style={{ margin: "20px 0 10px 0" }}>建立你的帳號</h2>
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
            label="名稱"
            placeholder="請輸入使用者名稱"
            value={username}
            onChange={(nameInputValue) => setUsername(nameInputValue)}
          />
        </AuthInputContainer>
        <AuthInputContainer>
          <AuthInput
            label="Email"
            placeholder="請輸入email"
            value={email}
            onChange={(emailInputValue) => setEmail(emailInputValue)}
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
        <AuthInputContainer>
          <AuthInput
            type="password"
            label="密碼確認"
            placeholder="請再次輸入密碼"
            value={passwordAgain}
            onChange={(passwordAgainInputValue) =>
              setPasswordAgain(passwordAgainInputValue)
            }
          />
        </AuthInputContainer>
        <AuthButton>註冊</AuthButton>
        <Link to="/login">
          <AuthLinkText>取消</AuthLinkText>
        </Link>
      </AuthContainer>
    </Container>
  );
}

export default SignUpPage;