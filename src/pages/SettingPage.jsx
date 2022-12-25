import styled from "styled-components";
import Container from "react-bootstrap/Container";
import SideBar from "../components/SideBar";
import AuthInput from "../components/AccountForm/AuthInput";
import { AuthInputContainer } from "../components/common/auth.styled";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { getUserSetting } from "../API/user";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";

// main區塊
const MainStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
`;

// 帳戶設定區塊
const CenterContainer = styled.div`
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  flex: 16 1 0;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

// 空的區塊
const RightContainer = styled.div`
  flex: 7 1 0;
`;

// 帳戶設定下方的border-line
const BorderLine = styled.div`
  width: 100%;
  border-top: 1px solid #e6ecf0;
`;

// 包住authInput的區塊
const InputContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SettingPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const { currentUser } = useAuth();

  const handleSave = async (e) => {
    e.preventDefault();

    let id = currentUser.id;
    
    // 欄位驗證
    if (account.trim().length === 0) {
      return;
    }
    if (name.length > 50 || account.trim().length === 0) {
      return;
    }
    if (email.trim().length === 0) {
      return;
    }
    if (password.trim().length === 0) {
      return;
    }

    try {
      const postStatus = await getUserSetting(
        {
          account,
          name,
          email,
          password,
          checkPassword,
          id,
        },
        
      );
      if (postStatus.status === "success") {
        console.log(postStatus);
        Swal.fire({
          position: "top",
          title: "發送成功",
          timer: 1000,
          icon: "success",
          showConfirmButton: false,
        });
        } else if (password !== checkPassword) {
          Swal.fire({
            position: "top",
            title: "密碼與確認密碼不相同!",
            timer: 1000,
            icon: "error",
            showConfirmButton: false,
          })
        } else {
          Swal.fire({
            position: "top",
            title: "發送失敗",
            timer: 1000,
            icon: "error",
            showConfirmButton: false,
          });
        }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top",
        title: "發送錯誤",
        timer: 1000,
        icon: "error",
        showConfirmButton: false,
      });
    }
  };
  // if (account.trim().length === 0) {
  //   Swal.fire({
  //     position: "top",
  //     title: "請輸入帳號",
  //     timer: 1000,
  //     icon: "error",
  //     showConfirmButton: false,
  //   });
  //   return;
  // }
  // if (name.trim().length === 0) {
  //   Swal.fire({
  //     position: "top",
  //     title: "請輸入名稱",
  //     timer: 1000,
  //     icon: "error",
  //     showConfirmButton: false,
  //   });
  //   return;
  // }

  // if (email.trim().length === 0) {
  //   Swal.fire({
  //     position: "top",
  //     title: "請輸入Email",
  //     timer: 1000,
  //     icon: "error",
  //     showConfirmButton: false,
  //   });
  //   return;
  // }
  // if (password.trim().length === 0) {
  //   Swal.fire({
  //     position: "top",
  //     title: "請輸入密碼",
  //     timer: 1000,
  //     icon: "error",
  //     showConfirmButton: false,
  //   });
  //   return;
  // }
  // if (checkPassword.trim().length === 0) {
  //   Swal.fire({
  //     position: "top",
  //     title: "請輸入密碼",
  //     timer: 1000,
  //     icon: "error",
  //     showConfirmButton: false,
  //   });
  //   return;
  // }

  //   if (res.success) {
  //   // 成功訊息
  //   Swal.fire({
  //     position: "top",
  //     title: "修改成功",
  //     timer: 1000,
  //     icon: "success",
  //     showConfirmButton: false,
  //   });
  //   return;

  // } else {
  //    console.log(res.status);
  // }

  // const handleSave = async (e) => {
  //   const res = await getUserSetting({
  //     account: setAccount(e.target.value),
  //     name: setName(e.target.value),
  //     email: setEmail(e.target.value),
  //     password: setPassword(e.target.value),
  //     checkPassword: setCheckPassword(e.target.value),
  //   });

  //   if (res.success) {
  //     // 成功訊息
  //     Swal.fire({
  //       position: "top",
  //       title: "修改成功",
  //       timer: 1000,
  //       icon: "success",
  //       showConfirmButton: false,
  //     });
  //     return;
  //   } else {
  //     console.log(res.message);
  //   }
  // };

  return (
    <Container>
      <MainStyle>
        {/* 左邊區塊 */}
        <LeftContainer>
          <SideBar location={"home"} />
        </LeftContainer>

        {/* 中間-右邊區塊 */}
        <CenterContainer>
          <h3 style={{ margin: "20px" }}>帳戶設定</h3>
          <BorderLine />

          {/* 控制表格欄位內的置中 */}
          <InputContainer>
            <AuthInputContainer style={{ width: "90%" }}>
              <AuthInput
                label="帳號"
                placeholder="請輸入帳號"
                value={account}
                
                onChange={(accountInputValue) => setAccount(accountInputValue)}
              />
            </AuthInputContainer>

            <AuthInputContainer style={{ width: "90%" }}>
              <AuthInput
                label="名稱"
                placeholder="請輸入名稱"
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

            <AuthInputContainer style={{ width: "90%" }}>
              <AuthInput
                label="Email"
                placeholder="請輸入Email"
                value={email}
                onChange={(emailInputValue) => setEmail(emailInputValue)}
              />
            </AuthInputContainer>

            <AuthInputContainer style={{ width: "90%" }}>
              <AuthInput
                type="password"
                label="密碼"
                placeholder="請輸入密碼"
                value={password}
                onChange={(passwordInputValue) =>
                  setPassword(passwordInputValue)
                }
              />
            </AuthInputContainer>

            <AuthInputContainer style={{ width: "90%" }}>
              <AuthInput
                type="password"
                label="密碼再確認"
                placeholder="請再次輸入密碼"
                value={checkPassword}
                onChange={(checkPasswordInputValue) =>
                  setCheckPassword(checkPasswordInputValue)
                }
              />
            </AuthInputContainer>
          </InputContainer>

          {/* 按鈕 */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="primary"
              style={{ margin: "3rem 2.5rem 0 0" }}
              onClick={handleSave}
            >
              儲存
            </Button>
          </div>
        </CenterContainer>
        <RightContainer></RightContainer>
      </MainStyle>
    </Container>
  );
};

export default SettingPage;
