import AdminSideBar from "../components/SideBar/AdminSideBar";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import background from "../assets/images/bg-1.png";
import avatar from "../assets/images/avatar-1.png";

import { EditIcon, LikeIcon } from "../assets/icons";
import { useEffect } from "react";
import { checkPermission } from "../API/auth";
import { useNavigate } from "react-router-dom";

// main區塊
const MainStyle = styled.div`
  display: flex;
`;
// sidebar區塊
const LeftContainer = styled.div`
  flex: 5 1 0;
  padding: 1rem;
  min-height: 100vh;
  border-right: 1px solid #e6ecf0;
  display: flex;
  flex-flow: column;
`;

// 使用者列表區塊
const UserContainer = styled.div`
  border-right: 1px solid #e6ecf0;
  width: 80%;
  height: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

// 使用者列表下方的border-line
const BorderLine = styled.div`
  width: 100%;
  border-top: 1px solid #e6ecf0;
`;

// 每一個使用者欄位
const UsersItem = styled.div`
  width: 249px;
  height: 314px;
  background-color: #f6f7f8;
  border-radius: 10px;
  margin: 1rem;
  position: relative;
`;

// 圖片外層Container
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
`;

// 姓名
const NameLink = styled.div`
  width: 100%;
  text-align: center;
  color: #171725;
  font-size: 16px;
  font-weight: 700;
`;

// 帳號
const AccountLink = styled.div`
  width: 100%;
  text-align: center;
  color: #6c757d;
  font-size: 14px;
  font-weight: 400;
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 30%;

  color: #696974;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: 32%;

  font-size: 14px;
  color: #6c757d;
`;

const AdminUsersPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/admin_login");
      }
      const result = await checkPermission(authToken);
      if (!result) {
        navigate("/admin_login");
      }
    };
    checkTokenIsValid();
  }, [navigate]);

  return (
    <Container>
      <MainStyle>
        {/* 左側sidebar */}
        <LeftContainer>
          <AdminSideBar />
        </LeftContainer>

        {/* 中間-右側的使用者列表 */}
        <UserContainer>
          <h3 style={{ margin: "20px" }}>使用者列表</h3>
          <BorderLine />

          <UsersItem>
            {/* 個人背景圖/大頭照欄位 */}
            <ImageContainer>
              <img
                src={background}
                alt="Background"
                style={{ width: "249px", height: "140px" }}
              />

              <img
                src={avatar}
                alt="Avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  position: "absolute",
                  top: "50%",
                }}
              />
            </ImageContainer>

            {/* 姓名/帳號欄位 */}
            <NameLink style={{ position: "absolute", top: "55%" }}>
              John Doe
            </NameLink>
            <AccountLink style={{ position: "absolute", top: "62%" }}>
              @heyjohn
            </AccountLink>

            {/* 追隨/喜歡欄位 */}
            <IconContainer>
              <EditIcon style={{ width: "23.87px", height: "21.6px" }} /> 1.5k
              <LikeIcon
                style={{
                  width: "20.1px",
                  height: "18.9px",
                  margin: "0 0 0 10px",
                }}
              />{" "}
              20k
            </IconContainer>

            {/* 跟隨中/跟隨者欄位 */}
            <TextContainer>
              <label style={{ color: "#171725" }}>34個</label>跟隨中
              <label style={{ color: "#171725", margin: "0 0 0 10px" }}>
                59位
              </label>
              跟隨者
            </TextContainer>
          </UsersItem>
        </UserContainer>
      </MainStyle>
    </Container>
  );
};

export default AdminUsersPage;
