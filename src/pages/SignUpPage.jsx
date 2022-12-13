import { AuthContainer ,
  AuthInputContainer ,AuthButton ,AuthLinkText } from "../components/common/auth.styled";
import AuthInput from "../components/AccountForm/AuthInput";
import { ACLogoIcon } from "../assets/icons";
import { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <AuthContainer>
    <div>
      <ACLogoIcon />
    </div>
      <h2 style={{margin:'20px 0 10px 0'}}>建立你的帳號</h2>
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
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  )
}

export default SignUpPage;