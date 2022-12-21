import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
  AuthLinkTextGroup,
} from "../components/common/auth.styled";
import AuthInput from "../components/AccountForm/AuthInput";
import { ACLogoIcon } from "../assets/icons";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { adminLogin } from "../API/auth";
import Swal from "sweetalert2";

const AdminLoginPage = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (account.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }

    const data = await adminLogin({
      account,
      password,
    });
    const token = data.data.token;

    if (data.success) {
      localStorage.setItem("authToken", token);
      // 登入成功訊息
      Swal.fire({
        position: "top",
        title: "登入成功",
        timer: 1000,
        icon: "success",
        showConfirmButton: false,
      });
      navigate("/admin_main");
      return;
    } else if (data.data.user.role !== "admin") {
      // 登入失敗訊息
      Swal.fire({
        position: "top",
        title: "使用者不存在!",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      // 登入失敗後欄位清空
      setAccount("");
      setPassword("");
    } else {
      // 登入失敗訊息
      Swal.fire({
        position: "top",
        title: "登入失敗",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
      // 登入失敗後欄位清空
      setAccount("");
      setPassword("");
    }
  };

  // useEffect(() => {
  //   const checkTokenIsValid = async () => {
  //     const authToken = localStorage.getItem("authToken");
  //     if (!authToken) {
  //       return;
  //     }
  //     const result = await checkPermission(authToken);
  //     if (result) {
  //       navigate("/admin_main");
  //     }
  //   };
  //   checkTokenIsValid();
  // }, [navigate]);

  return (
    <Container>
      <AuthContainer>
        <div>
          <ACLogoIcon />
        </div>
        <h2 style={{ margin: "20px 0 10px 0" }}>後台登入</h2>
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
          <Link to="/login">
            <AuthLinkText>前台登入</AuthLinkText>
          </Link>
        </AuthLinkTextGroup>
      </AuthContainer>
    </Container>
  );
};

export default AdminLoginPage;
