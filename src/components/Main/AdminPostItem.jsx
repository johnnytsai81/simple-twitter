import styled from "styled-components";
import { CloseIcon } from "../../assets/icons";
import relativeTime from "../../utilities/relativeTime";

// 每一欄使用者
const UserItem = styled.div`
  width: 100%;
  height: 120px;
  border-top: 1px solid #e6ecf0;
  padding: 1.5rem;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: start;
`;

const UserItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 0 0 10px;
`;

// 假頭像
const AvatarIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c4c4c4;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
`;

// 姓名和帳號列的外層
const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

// 姓名
const NameLink = styled.div`
  color: #171725;
  font-size: 16px;
  font-weight: 700;
`;

// 帳號和時間顯示
const AccountLink = styled.div`
  color: #6c757d;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 0 10px;
`;

// 貼文內容
const PostLink = styled.div`
  margin: 0.5rem 0 0 0;
  color: #171725;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.5em;
  -webkit-line-clamp: 2;
`;

const AdminPostItem = ({
  id,
  username,
  account,
  time,
  description,
  avatar,
  postItem,
  onDelete,
}) => {
  return (
    <UserItem>
      <button
        style={{ background: "none" }}
        onClick={() => onDelete?.(postItem.id)}
      >
        <CloseIcon
          style={{
            position: "absolute",
            top: "15px",
            right: "10px",
            cursor: "pointer",
          }}
        />
      </button>

      <AvatarIcon>
        <img src={avatar} alt="avatar" />
      </AvatarIcon>
      <UserItemContainer>
        <LinkGroup>
          <NameLink>{username}</NameLink>
          <AccountLink>
            @{account}・{relativeTime(time)}
          </AccountLink>
        </LinkGroup>
        <PostLink>{description}</PostLink>
      </UserItemContainer>
    </UserItem>
  );
};

export default AdminPostItem;
