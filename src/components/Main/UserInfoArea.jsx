// 引入方法
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

// 引入圖片
import { ReactComponent as MailIcon } from "../../assets/icons/mail-hollow.svg";
import { ReactComponent as BellHollowIcon } from "../../assets/icons/bell-hollow.svg";
import { ReactComponent as BellSolidIcon } from "../../assets/icons/bell-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import noBg from "../../assets/images/no-bg.jpg";

// 引入元件
import ProfileEditModal from "./ProfileEditModal";
import { followUser, unfollowUser } from "../../API/user";

const CardStyle = styled.div`
  position: relative;
  .background {
    width: 100%;
    object-fit: cover;
    height: 200px;
  }
  .avatar {
    position: absolute;
    top: 130px;
    object-fit: cover;
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
    .intro {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-height: 1.5em;
      -webkit-line-clamp: 5;
    }
    .text-wrap {
      display: flex;
      gap: 2rem;
      color: var(--secondary-color) !important;
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
  const { currentUser } = useAuth();
  let coverImage = props.coverImage;
  let avatar = props.avatar;
  let username = props.username;
  let account = props.account;
  let isFollowed = props.isFollowed;
  let totalFollowers = props.totalFollowers;
  let totalFollowings = props.totalFollowings;
  let selfIntro = props.selfIntro;

  const UserId = useParams();
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
  async function handleFollow(e) {
    e.stopPropagation();
    e.preventDefault();
    if (followState === false) {
      setFollowState(!followState);
      try {
        await followUser(UserId.UserId);
      } catch (error) {
        console.error(error);
      }
    } else if (followState === true) {
      setFollowState(!followState);
      try {
        await unfollowUser(UserId.UserId);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <CardStyle>
      {coverImage === null ? (
        <img className="background" src={noBg} alt="background" />
      ) : (
        <img className="background" src={coverImage} alt="background" />
      )}
      {avatar === null ? (
        <NoImage className="avatar" />
      ) : (
        <img className="avatar" src={avatar} alt="avatar" />
      )}
      <div className="card-header">
        {currentUser === null ? (
          ""
        ) : currentUser.id === Number(UserId.UserId) ? (
          <Button
            variant="outline-primary ms-auto mt-4 me-4"
            onClick={() => {
              handleShow();
            }}
          >
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
              <Button variant="primary" onClick={handleFollow}>
                正在跟隨
              </Button>
            ) : (
              <Button variant="outline-primary" onClick={handleFollow}>
                跟隨
              </Button>
            )}
          </ButtonStyle>
        )}
      </div>
      <div className="card-body">
        <h3 className="name mb-2">{username}</h3>
        <p className="account mb-0">@{account}</p>
      </div>
      <div className="card-footer">
        <div className="mb-2 intro">{selfIntro}</div>
        <div className="text-wrap">
          <div className="text">
            <NavLink to={`/user/${UserId.UserId}/followers`}>
              {totalFollowers}個
            </NavLink>
            跟隨中
          </div>
          <div className="text">
            <NavLink to={`/user/${UserId.UserId}/following`}>
              {totalFollowings}位
            </NavLink>
            跟隨者
          </div>
        </div>
      </div>
      <ProfileEditModal show={show} setShow={setShow} avatarOri={avatar} coverImageOri={coverImage}/>
    </CardStyle>
  );
}

export default UserInfoArea;
