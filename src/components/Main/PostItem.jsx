// 引入方法
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// 引入圖片
import { ReactComponent as LikeIcon } from "../../assets/icons/like-solid.svg";
import { ReactComponent as NoImage } from "../../assets/icons/no-image.svg";
import { ReactComponent as ReplyIcon } from "../../assets/icons/reply.svg";

// 引入元件
import ReplyModal from "./ReplyModal";

const CardStyle = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid var(--border-color);
  .avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    img {
      border-radius: 50px;
    }
  }
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    .card-header {
      display: flex;
    }
    .name {
      font-size: 1rem;
      font-weight: 600;
      margin-right: 0.5rem;
    }
    .account {
      font-size: 0.875rem;
      color: var(--secondary-color);
    }
    .card-footer {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const ReplyIconStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  .reply {
    width: 1rem;
    height: 1rem;
  }
`;

const LikeIconStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--secondary-color);
  cursor: pointer;
  .like {
    width: 1rem;
    height: 1rem;
    fill: var(--white-color);
    stroke: var(--secondary-color);
    stroke-width: 2px;
    &.active {
      fill: var(--error-color);
      stroke: var(--error-color);
    }
  }
`;

function PostItem(props) {
  let tweet = props.tweet;
  let time = props.time;
  let name = props.name;
  let like = props.like;
  let likeActive = props.likeActive;
  let reply = props.reply;
  let account = props.account;
  let TweetId = props.TweetId;
  let profileImage = props.profileImage;
  let UserId = props.UserId;
  const [showLike, setShowLike] = useState(likeActive);
  const [countLike, setCountLike] = useState(like);
  const [show, setShow] = useState(false);

  // 開啟跟關閉modal
  const handleShow = () => setShow(true);

  // 愛心狀態
  function handleShowLike() {
    setShowLike(!showLike);
  }

  // 愛心數量
  function handleCountLike(type) {
    if (type === "increment") {
      setCountLike(countLike + 1);
    }
    if (type === "decrement") {
      setCountLike(countLike - 1);
    }
  }

  return (
    <CardStyle>
      <NavLink className="avatar" to={`/user/${UserId}/tweet`}>
        {profileImage === "" ? (
          <NoImage />
        ) : (
          <img src={profileImage} alt="avatar" />
        )}
      </NavLink>
      <div className="card-content">
        <NavLink to={`/user/${UserId}/tweet`}>
          <div className="card-header">
            <h3 className="name mb-0">{name}</h3>
            <p className="account mb-0">
              @{account}・<span className="time">{time}</span>
            </p>
          </div>
        </NavLink>
        <NavLink to={`/tweet/${TweetId}/replies`}>
          <p className="text-start mb-0">{tweet}</p>
        </NavLink>
        <div className="card-footer">
          <ReplyIconStyle onClick={handleShow}>
            <ReplyIcon className="reply" />
            <span className="en-font-family">{reply}</span>
          </ReplyIconStyle>
          {showLike ? (
            <LikeIconStyle
              onClick={() => {
                handleShowLike();
                handleCountLike("decrement");
              }}
            >
              <LikeIcon className="like active" />
              <span className="en-font-family">{countLike}</span>
            </LikeIconStyle>
          ) : (
            <LikeIconStyle
              onClick={() => {
                handleShowLike();
                handleCountLike("increment");
              }}
            >
              <LikeIcon className="like" />
              <span className="en-font-family">{countLike}</span>
            </LikeIconStyle>
          )}
        </div>
      </div>
      <ReplyModal
        show={show}
        setShow={setShow}
        profileImage={profileImage}
        name={name}
        account={account}
        time={time}
        tweet={tweet}
        selfImage={'https://i.imgur.com/buZlxFF.jpg'}
      />
    </CardStyle>
  );
}

export default PostItem;
