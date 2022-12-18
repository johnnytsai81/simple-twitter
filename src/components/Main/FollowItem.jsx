// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// 引入圖片
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    border-radius: 50px;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .name {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
  }
`;

function FollowItem(props) {
  let selfIntro = props.selfIntro;
  let name = props.name;
  let isFollowed = props.isFollowed;
  let profileImage = props.profileImage;
  let UserId = props.UserId;
  const [followState, setFollowState] = useState(isFollowed);

  // 切換follow狀態
  function handleFollow(e) {
    e.stopPropagation();
    e.preventDefault();
    setFollowState(!followState);
  }

  return (
    <NavLink to={`/user/${UserId}/tweet`}>
      <CardStyle>
        {profileImage === "" ? (
          <NoImage className="avatar"/>
        ) : (
          <img className="avatar" src={profileImage} alt="avatar" />
        )}
        <div className="card-content">
          <div className="card-header">
            <h3 className="name mb-0">{name}</h3>
            {followState === true ? (
              <Button variant="primary" size="sm" onClick={(e) => {
                handleFollow(e);
              }}>
                正在跟隨
              </Button>
            ) : (
              <Button variant="outline-primary" size="sm" onClick={(e) => {
                handleFollow(e);
              }}>
                跟隨
              </Button>
            )}
          </div>
          <p className="text-start mb-0">{selfIntro}</p>
        </div>
      </CardStyle>
    </NavLink>
  );
}

export default FollowItem;
