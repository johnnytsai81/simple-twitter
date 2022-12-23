import styled from "styled-components";
// import { background, avatar } from '../../assets/images';
import { EditIcon, LikeIcon, NoImage } from "../../assets/icons";
import backgroundImage from "../../assets/images/bg-1.png";

// 每一個使用者欄位
const UsersItem = styled.div`
  background-color: #f6f7f8;
  border-radius: 10px;
  position: relative;
`;

// 圖片外層Container
const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;

  .coverImage {
    border-radius: 10px 10px 0 0;
  }
  .avatar {
    border-radius: 50%;
    border: 3px solid var(--white-color);
  }

  .noImage {
    position: absolute;
    top: 51%;
    border-radius: 50%;
    border: 3px solid var(--white-color);
  }
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
  margin-top: 1rem;
  position: relative;
  color: #696974;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 14px;
  color: #6c757d;
`;

const AdminUserItem = ({
  id,
  coverImage,
  avatar,
  username,
  account,
  totalTweets,
  totalLikes,
  followings,
  followers,
}) => {
  return (
    <UsersItem>
      {/* 個人背景圖/大頭照欄位 */}
      <ImageContainer>
        {coverImage ? (
          <img
            className="coverImage"
            src={coverImage}
            alt="Background"
            style={{ width: "100%", height: "140px" }}
          />
        ) : (
          <img
            src={backgroundImage}
            style={{ width: "100%", height: "140px" }}
            alt="backgroundImage"
          />
        )}

        {avatar ? (
          <img
            className="avatar"
            src={avatar}
            alt="Avatar"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              top: "50%",
            }}
          />
        ) : (
          <NoImage className="noImage" />
        )}
      </ImageContainer>

      {/* 姓名/帳號欄位 */}
      <NameLink className="mt-10">{username}</NameLink>
      <AccountLink className="mt-2">@{account}</AccountLink>

      {/* 推文/喜歡欄位 */}
      <IconContainer>
        <EditIcon style={{ width: "23.87px", height: "21.6px" }} />
        {totalTweets}
        <LikeIcon
          style={{
            width: "20.1px",
            height: "18.9px",
            marginLeft: "10px",
          }}
        />
        {totalLikes}
      </IconContainer>

      {/* 跟隨中/跟隨者欄位 */}
      <TextContainer>
        <label style={{ color: "#171725" }}>{followings}個</label>跟隨中
        <label style={{ color: "#171725", marginLeft: "10px" }}>
          {followers}位
        </label>
        跟隨者
      </TextContainer>
    </UsersItem>
  );
};

export default AdminUserItem;
