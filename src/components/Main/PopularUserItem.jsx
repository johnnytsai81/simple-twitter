// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// 引入圖片
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";

const CardStyle = styled.div`
  display: flex;
  gap: 1rem;
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    border-radius: 50px;
  }
  .card-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    .card-header {
      flex: 0 0 calc(100% - 98px);
      display: flex;
      flex-direction: column;
    }
    .name {
      font-size: 1rem;
      font-weight: 600;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-height: 1.5em;
      -webkit-line-clamp: 1;
    }
    .account {
      font-size: 0.875rem;
      color: var(--secondary-color);
    }
  }
  button {
    margin-left: auto;
  }
`;

function PopularUserItem(props) {
  let isFollowed = props.isFollowed;
  let username = props.username;
  let UserId = props.UserId;
  let account = props.account;
  let avatar = props.avatar;
  const { currentUser } = useAuth();
  const [followState, setFollowState] = useState(isFollowed);
  // eslint-disable-next-line

  // 切換follow狀態
  function handleFollow(e) {
    e.stopPropagation();
    e.preventDefault();
    setFollowState(!followState);
  }

  return (
    <NavLink to={`/user/${UserId}/tweet`}>
      <CardStyle>
        {avatar === null ? (
          <NoImage className="avatar" />
        ) : (
          <img className="avatar" src={avatar} alt="avatar" />
        )}
        <div className="card-content">
          <div className="card-header">
            <h3 className="name mb-0">{username}</h3>
            <p className="account mb-0">@{account}</p>
          </div>
          {currentUser === null ? (
            ""
          ) : UserId === currentUser.id ? (
            ""
          ) : followState === true ? (
            <Button variant="primary" size="sm" onClick={handleFollow}>
              正在跟隨
            </Button>
          ) : (
            <Button variant="outline-primary" size="sm" onClick={handleFollow}>
              跟隨
            </Button>
          )}
        </div>
      </CardStyle>
    </NavLink>
  );
}

export default PopularUserItem;
