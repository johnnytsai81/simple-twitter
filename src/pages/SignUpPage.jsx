import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from "../components/common/auth.styled";
import AuthInput from "../components/AccountForm/AuthInput";
// import AuthInputAlert from "../components/AccountForm/AuthInputAlert";
import { ACLogoIcon } from "../assets/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Toast } from "../utilities/sweetalert";
import { register } from "../API/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const TextLine = styled.div`
  display: flex;
  justify-content: space-between;
`;


const SignUpPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.trim().length === 0 ) {
      Toast.fire({
        title: "請輸入帳號",
        icon: "error",
      });
      return;
    }
    if (name.trim().length === 0) {
      Toast.fire({
        title: "請輸入名稱",
        icon: "error",
      });
      return;
    }
    if (name.length > 50) {
      Toast.fire({
        title: "名稱字數超過上限",
        icon: "error",
      });
      return;
    }
    if (email.trim().length === 0) {
      Toast.fire({
        title: "請輸入Email",
        icon: "error",
      });
      return;
    }
    if (password.trim().length === 0) {
      Toast.fire({
        title: "請輸入密碼",
        icon: "error",
      });
      return;
    }
    if (checkPassword.trim().length === 0) {
      Toast.fire({
        title: "請輸入確認密碼",
        icon: "error",
      });
      return;
    }
    if (password !== checkPassword) {
      Toast.fire({
        title: "密碼和確認密碼不相同!",
        icon: "error",
      });
      return;
    }

    const data = await register({
      account,
      name,
      email,
      password,
      checkPassword,
    });

    if (data.success) {
      // 註冊成功訊息
      Toast.fire({
        title: "註冊成功",
        icon: "success",
      });
      navigate("/login");
      return;
    } else {
      console.log(data.message);
    }
  };

  // useEffect(() => {
  //   const checkTokenIsValid = async () => {
  //     const authToken = localStorage.getItem("authToken");
  //     if(!authToken) {
  //       return
  //     }
  //     const result = await checkPermission(authToken)
  //     if(result) {
  //       navigate('/main')
  //     }
  //   }
  //   checkTokenIsValid()
  // },[navigate])

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
                onChange={(accountInputValue) => {
                  setAccount(accountInputValue);
                }}
              />
          </AuthInputContainer>
        <AuthInputContainer >
          <AuthInput
            label="名稱"
            placeholder="請輸入使用者名稱"
            value={name}
            onChange={(nameInputValue) => setName(nameInputValue)}
          />
          <TextLine>
            <label
              style={{
                color: "red",
                fontSize: "12px",
                visibility: name.length < 51 && "hidden",
              }}
            >
              🛈字數超過上限!
            </label>
            <label
              style={{
                color: "#696974",
                fontSize: "12px",
                textAlign: "right",
              }}
            >
              {name.length}/50
            </label>
          </TextLine>
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
            value={checkPassword}
            onChange={(checkPasswordInputValue) =>
              setCheckPassword(checkPasswordInputValue)
            }
          />
        </AuthInputContainer>
        <AuthButton onClick={handleClick}>註冊</AuthButton>
        <Link to="/login">
          <AuthLinkText>取消</AuthLinkText>
        </Link>
      </AuthContainer>
    </Container>
  );
};

export default SignUpPage;
