// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// 引入圖片
import { ReactComponent as MailIcon } from "../../assets/icons/mail-hollow.svg";
import { ReactComponent as BellHollowIcon } from "../../assets/icons/bell-hollow.svg";
import { ReactComponent as BellSolidIcon } from "../../assets/icons/bell-solid.svg";

// 引入元件
import ProfileEditModal from "./ProfileEditModal";

const CardStyle = styled.div`
  position: relative;
  .background {
    width: 100%;
    height: 200px;
  }
  .avatar {
    position: absolute;
    top: 130px;
    left: 1rem;
    height: 140px;
    width: 140px;
    border-radius: 100px;
    border: 3px solid var(--white-color);
  }
  .account {
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
  .card-header {
    display: flex;
    width: 100%;
    .btn-primary {
      margin-left: auto;
    }
  }
  .card-body {
    padding: 1.5rem 1rem 0.75rem 1rem;
  }
  .card-footer {
    padding: 0 1rem 1rem 1rem;
    .text-wrap {
      display: flex;
      gap: 2rem;
      a {
        color: var(--secondary-color) !important;
      }
    }
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  gap: 1rem;
  .mail-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    fill: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }
  .bell-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    cursor: pointer;
    fill: var(--main-color);
    border: 1px solid var(--main-color);
    border-radius: 50px;
    &.solid {
      background: var(--main-color);
      fill: var(--white-color);
    }
  }
`;

function UserInfoArea(props) {
  let coverImage = props.coverImage;
  let avatar = props.avatar;
  let username = props.username;
  let account = props.account;
  let isFollowed = props.isFollowed;
  let follower = props.follower;
  let followed = props.followed;
  let selfIntro = props.selfIntro;
  let UserId = props.UserId;
  const [showNotice, setShowNotice] = useState(false);
  const [followState, setFollowState] = useState(isFollowed);
  const [show, setShow] = useState(false);

  // 開啟跟關閉modal
  const handleShow = () => setShow(true);

  // 預設為不開啟小鈴鐺
  function handleShowNotice() {
    setShowNotice(!showNotice);
  }

  // 切換follow狀態
  function handleFollow(e) {
    e.stopPropagation();
    e.preventDefault();
    setFollowState(!followState);
  }

  return (
    <CardStyle>
      <img className="background" src={coverImage} alt="background" />
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="card-header">
        {UserId === "self" ? (
          <Button variant="outline-primary ms-auto mt-4 me-4" onClick={handleShow}>
            編輯個人資料
          </Button>
        ) : (
          <ButtonStyle className="ms-auto mt-4 me-4">
            <div className="mail-icon">
              <MailIcon />
            </div>
            {followState === true ? (
              showNotice === true ? (
                <div className="bell-icon solid" onClick={handleShowNotice}>
                  <BellSolidIcon />
                </div>
              ) : (
                <div className="bell-icon hollow" onClick={handleShowNotice}>
                  <BellHollowIcon />
                </div>
              )
            ) : (
              ""
            )}

            {followState === true ? (
              <Button variant="primary" onClick={handleFollow}>正在跟隨</Button>
            ) : (
              <Button variant="outline-primary" onClick={handleFollow}>跟隨</Button>
            )}
          </ButtonStyle>
        )}
      </div>
      <div className="card-body">
        <h3 className="name mb-2">{username}</h3>
        <p className="account mb-0">@{account}</p>
      </div>
      <div className="card-footer">
        <div className="mb-2">{selfIntro}</div>
        <div className="text-wrap">
          <div className="text">
            {followed}個
            <NavLink to={`/user/${UserId}/following`}>跟隨中</NavLink>
          </div>
          <div className="text">
            {follower}位
            <NavLink to={`/user/${UserId}/followers`}>跟隨者</NavLink>
          </div>
        </div>
      </div>
      <ProfileEditModal
        show={show}
        setShow={setShow}
        selfImage={'https://i.imgur.com/buZlxFF.jpg'}
        coverImage={'https://i.imgur.com/Uongp79.jpg'}
      />
    </CardStyle>
  );
}

export default UserInfoArea;